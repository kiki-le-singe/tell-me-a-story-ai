import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import RNFetchBlob from 'react-native-blob-util';

import {WriteStoryScreenProps} from '../../routes/types';
import colors from '../../utils/colors';
import writtingImage from '../../assets/images/writting.jpg';
import readImage from '../../assets/images/relax-and-read.jpg';
import Explanation from '../../components/Explanation';
import {Position} from '../../components/Explanation/types';
import {TranscriptionsData} from './types';
import openAIAPI from '../../api/openAIAPI';

// openai.createTranscription doesn't seem to work... So, for now, we use RNFetchBlob:
// import {Configuration, OpenAIApi} from 'openai';
// import Config from 'react-native-config';
// class CustomFormData extends FormData {
//   // https://github.com/openai/openai-node/issues/75
//   getHeaders() {
//     return {};
//   }
// }
// const configuration = new Configuration({
//   apiKey: Config.OPENAI_API_KEY,
//   formDataCtor: CustomFormData, // Allow to fix error: localVarFormParams.getHeaders is not a function
// });
// const openai = new OpenAIApi(configuration);

function WriteStoryScreen({navigation}: WriteStoryScreenProps): JSX.Element {
  const [story, onChangeStory] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  // openai.createTranscription doesn't seem to work... So, for now, we use the code below with RNFetchBlob:
  // const createTranscription = React.useCallback(
  //   async (data: TranscriptionsData) => {
  //     const {uri, type, name} = data;
  //     try {
  //       // Prepare Blob data
  //       const blobData = RNFetchBlob.wrap(uri.replace('file://', ''));
  //       const response = await openai.createTranscription(
  //         blobData,
  //         'whisper-1',
  //       );
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.log('error:', error);
  //         console.log('error.message:', error.message);
  //       }
  //     }
  //   },
  //   [],
  // );

  const createTranscription = React.useCallback(
    async (data: TranscriptionsData) => {
      const {uri, type, name} = data;
      // Prepare Blob data
      const blobData = RNFetchBlob.wrap(uri.replace('file://', ''));

      // Use RNFetchBlob to send the file
      await RNFetchBlob.fetch(
        'POST',
        openAIAPI.createTranscriptions,
        openAIAPI.createTranscriptionsHeaders,
        [
          {
            name: 'file',
            filename: name,
            type: type,
            data: blobData,
          },
          {name: 'model', data: 'whisper-1'},
        ],
      )
        .then(resp => {
          try {
            const {text} = JSON.parse(resp.data);
            onChangeStory(text);
          } catch (error) {
            console.log('error:', error);
          }
          console.log(resp);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [],
  );

  function handleReadYourStoryPress() {
    if (story) {
      navigation.navigate('Story', {story});
    } else {
      Alert.alert('Please write a story...');
    }
  }

  function handlePickAudioFileError(err: unknown) {
    if (DocumentPicker.isCancel(err)) {
      console.log('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.log(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      console.log('err', err);
    }
  }

  function handlePickAudioFile() {
    DocumentPicker.pick({
      type: types.audio,
    })
      .then(setResult)
      .catch(handlePickAudioFileError);
  }

  React.useEffect(() => {
    if (result) {
      setIsLoading(true);

      const data = Array.isArray(result) ? result[0] : result;

      createTranscription(data as TranscriptionsData);
    }
    console.log(JSON.stringify(result, null, 2));
  }, [result, createTranscription]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <Explanation
        text="You can also write your own story!"
        image={writtingImage}
      />
      <Explanation
        textPosition={Position.Right}
        text="And just read your story!"
        image={readImage}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeStory}
          value={story}
          placeholder="Write your story..."
          placeholderTextColor={colors.ORANGE}
          selectionColor={colors.BLUE_DARK}
          autoCorrect={false}
        />
        <Text style={styles.exampleText}>
          Example: Tell me a story about a frog who dreams to become a human.{' '}
          <Text
            onPress={handlePickAudioFile}
            style={[styles.exampleText, styles.exampleAudioText]}>
            You can also select an audio file from your device to transcribe
            your audio into text and create a story!
          </Text>
        </Text>
      </View>

      {isLoading && <ActivityIndicator color={colors.BLUE_DARK} size="large" />}

      <TouchableOpacity
        onPress={handleReadYourStoryPress}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Read your story</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
    gap: -12,
  },
  inputContainer: {
    width: '100%',
    gap: 10,
  },
  exampleText: {
    color: colors.BLUE_DARK,
    fontStyle: 'italic',
  },
  exampleAudioText: {
    color: colors.ORANGE,
    fontStyle: 'italic',
  },
  input: {
    width: '100%',
    height: 40,
    marginTop: 50,
    borderWidth: 1,
    borderColor: colors.BLUE_DARK,
    padding: 10,
    color: colors.ORANGE,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: colors.ORANGE,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 20,
  },
});

export default WriteStoryScreen;
