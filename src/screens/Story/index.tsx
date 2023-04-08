import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  View,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import Config from 'react-native-config';
import {Configuration, OpenAIApi} from 'openai';
import FastImage from 'react-native-fast-image';

import {StoryScreenProps} from '../../routes/types';
import {storyState} from '../../atoms/Story';
import colors from '../../utils/colors';
import imageWaiting from '../../assets/images/waiting.jpg';
import {ImagesState, defaultState} from './types';

const configuration = new Configuration({
  apiKey: Config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function StoryScreen({navigation}: StoryScreenProps): JSX.Element {
  const story = useRecoilValue(storyState);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState<string | undefined>('');
  const [images, setImages] = React.useState<ImagesState[]>([defaultState]);

  const fetchImagesStory = React.useCallback(async (prompt: string = '') => {
    try {
      const response = await openai.createImage({
        prompt,
        n: 5,
        size: '256x256',
      });

      setImages(response.data.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error:', error);
        console.log('error.message:', error.message);
      }
    }
  }, []);

  const fetchStory = React.useCallback(async () => {
    const content = `Tell me a story with ${story.hero} as a Hero and ${story.villain} as villain. This story should take place ${story.place}`;

    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content}],
      });

      const _message = completion.data.choices[0].message;

      setMessage(_message?.content);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error:', error);
        console.log('error.message:', error.message);
      }
    }
  }, [story]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchStory();
      await fetchImagesStory(
        `${story.hero} as a Hero and ${story.villain} as villain, ${story.place}`,
      );
      setIsLoading(false);
    };

    if (story) {
      fetchData();
    }
  }, [story, fetchStory, fetchImagesStory]);

  function renderImages(): JSX.Element {
    const _images = images.map((element, index) => (
      <FastImage
        key={`Images_${index}`}
        style={styles.image}
        source={{
          uri: element.url,
        }}
      />
    ));

    return <View style={styles.imageContainer}>{_images}</View>;
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <Text style={styles.synopsis}>
        Tell me a story with <Text style={styles.chosenItem}>{story.hero}</Text>{' '}
        as a Hero and <Text style={styles.chosenItem}>{story.villain}</Text> as
        villain. This story should take place{' '}
        <Text style={styles.chosenItem}>{story.place}</Text>.
      </Text>

      {isLoading ? (
        <ImageBackground
          source={imageWaiting}
          resizeMode="cover"
          style={styles.imageLoader}>
          <ActivityIndicator color={colors.BLUE_DARK} size="large" />
        </ImageBackground>
      ) : (
        <>
          <Text style={styles.story}>{message}</Text>
          {renderImages()}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainerStyle: {
    padding: 20,
    paddingBottom: 40,
  },
  synopsis: {
    color: colors.BLUE_DARK,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 50,
  },
  chosenItem: {
    color: colors.ORANGE,
    fontWeight: '600',
  },
  story: {
    color: colors.BLUE_DARK,
    fontSize: 20,
    textAlign: 'center',
  },
  imageLoader: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
    width: 'auto',
  },
  imageContainer: {
    marginTop: 40,
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: colors.ORANGE,
  },
});

export default StoryScreen;
