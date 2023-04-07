import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import Config from 'react-native-config';
import {Configuration, OpenAIApi} from 'openai';

import {StoryScreenProps} from '../../routes/types';
import {storyState} from '../../atoms/Story';
import colors from '../../utils/colors';

import imageWaiting from '../../assets/images/waiting.jpg';

function StoryScreen({navigation}: StoryScreenProps): JSX.Element {
  const story = useRecoilValue(storyState);
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState<string | undefined>('');

  // React.useEffect(() => {
  //   console.log(
  //     '------------------------------------------------------------------------------------------------',
  //   );

  //   const fetchData = async () => {
  //     const configuration = new Configuration({
  //       apiKey: Config.OPENAI_API_KEY,
  //     });
  //     const openai = new OpenAIApi(configuration);

  //     console.log('configuration:', configuration);

  //     try {
  //       const response = await openai.createImage({
  //         prompt: 'a white siamese cat',
  //         n: 5,
  //         size: '256x256',
  //         user: Config.OPENAI_USER_IDENTIFIER,
  //       });
  //       console.log('response.data', response.data);

  //       const imageUrl = response.data.data[0].url;
  //       console.log('imageUrl', imageUrl);
  //     } catch (error) {
  //       if (error instanceof Error) {
  //         console.log('error:', error);
  //         console.log('error.message:', error.message);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const content = `Tell me a story with ${story.hero} as a Hero and ${story.villain} as villain. This story should take place ${story.place}`;
      const configuration = new Configuration({
        apiKey: Config.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      try {
        const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{role: 'user', content}],
          temperature: 2,
          user: Config.OPENAI_USER_IDENTIFIER,
        });

        console.log('completion', completion);

        const _message = completion.data.choices[0].message;
        console.log('message', _message?.content);
        setMessage(_message?.content);
      } catch (error) {
        if (error instanceof Error) {
          console.log('error:', error);
          console.log('error.message:', error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (story) {
      fetchData();
    }
  }, [story]);

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
          style={styles.image}>
          <ActivityIndicator color={colors.BLUE_DARK} size="large" />
        </ImageBackground>
      ) : (
        <Text style={styles.story}>{message}</Text>
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
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 300,
    width: 'auto',
  },
});

export default StoryScreen;
