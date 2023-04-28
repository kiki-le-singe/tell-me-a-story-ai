import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  Alert,
  Button,
} from 'react-native';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import {Configuration, OpenAIApi} from 'openai';
import Config from 'react-native-config';
import RNFS from 'react-native-fs';
import * as EXPODocumentPicker from 'expo-document-picker';

import {WriteStoryScreenProps} from '../../routes/types';
import colors from '../../utils/colors';

import writtingImage from '../../assets/images/writting.jpg';
import readImage from '../../assets/images/relax-and-read.jpg';
import Explanation from '../../components/Explanation';
import {Position} from '../../components/Explanation/types';

class CustomFormData extends FormData {
  // https://github.com/openai/openai-node/issues/75
  getHeaders() {
    return {};
  }
}
const configuration = new Configuration({
  apiKey: Config.OPENAI_API_KEY,
  formDataCtor: CustomFormData, // Allow to fix error: localVarFormParams.getHeaders is not a function
});
const openai = new OpenAIApi(configuration);

function WriteStoryScreen({navigation}: WriteStoryScreenProps): JSX.Element {
  const [story, onChangeStory] = React.useState('');
  const [result, setResult] = React.useState<
    Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null
  >();

  const createTranscription = React.useCallback(async (uri: string) => {
    try {
      // const _file = readFile(uri);

      const file = await RNFS.readFile(uri, 'utf8');
      // const file = await RNFetchBlob.fs.readFile(uri, 'utf8');
      debugger;

      const response = await openai.createTranscription(
        file,
        // _file,
        // fs.createReadStream(file),
        'whisper-1',
      );

      debugger;
      // setImages(response.data.data);
    } catch (error) {
      debugger;
      if (error instanceof Error) {
        debugger;
        console.log('error:', error);
        console.log('error.message:', error.message);
      }
    }
  }, []);

  function handlePress() {
    if (story) {
      navigation.navigate('Story', {story});
    } else {
      Alert.alert('Please write a story...');
    }
  }

  function handleError(err: unknown) {
    if (DocumentPicker.isCancel(err)) {
      console.log('cancelled');
      debugger;
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      debugger;
      console.log(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      debugger;
      console.log('err', err);
    }
  }

  async function pickAudio() {
    let result = await EXPODocumentPicker.getDocumentAsync();
    // let result = await EXPODocumentPicker.getDocumentAsync({ type: 'application/pdf' });

    if (result.type === 'success') {
      // Do something with the picked document
      console.log(result.uri);
    }
  }

  React.useEffect(() => {
    if (result) {
      // const _result = JSON.stringify(result, null, 2)
      const {uri} = Array.isArray(result) ? result[0] : result;

      createTranscription(uri);

      debugger;
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
          Example: Tell me a story about a frog who dreams to become a human.
        </Text>
      </View>

      {/* <Button
        title="open picker for single file selection"
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
              type: types.audio,
            });
            setResult([pickerResult]);
          } catch (e) {
            handleError(e);
          }
        }}
      /> */}

      <Button
        title="open picker for single selection of audio files"
        onPress={() => {
          DocumentPicker
            // .pick()
            .pick({
              type: types.audio,
            })
            .then(setResult)
            .catch(handleError);
        }}
      />

      <Button title="Select Audio" onPress={pickAudio} />

      <Text>{JSON.stringify(result)}</Text>
      <Text>_____________</Text>
      <Text>_____________</Text>
      <Text>_____________</Text>
      <Text>{JSON.stringify(result, null, 2)}</Text>

      <TouchableOpacity onPress={handlePress} style={styles.buttonContainer}>
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
