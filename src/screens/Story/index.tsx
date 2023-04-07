import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRecoilValue} from 'recoil';
// import Config from 'react-native-config';
// import {Configuration, OpenAIApi} from 'openai';

import {StoryScreenProps} from '../../routes/types';
import {storyState} from '../../atoms/Story';

function StoryScreen({navigation}: StoryScreenProps): JSX.Element {
  const story = useRecoilValue(storyState);
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const configuration = new Configuration({
  //       apiKey: Config.OPENAI_API_KEY,
  //     });
  //     const openai = new OpenAIApi(configuration);

  //     try {
  //       const response = await openai.createImage({
  //         prompt: 'a white siamese cat',
  //         n: 5,
  //         size: '512x512',
  //         user: Config.OPENAI_USER_IDENTIFIER,
  //       });

  //       const imageUrl = response.data.data[0].url;
  //       console.log(imageUrl);
  //       console.log(response.data);
  //       debugger;
  //     } catch (error) {
  //       debugger;
  //       if (error instanceof Error) {
  //         console.log(error);
  //         console.log(error.message);
  //         debugger;
  //       }
  //     }
  //   };

  //   // fetchData();
  // }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>
          Tell me a story with {story.hero} as Hero and {story.villain} as
          villains. This story should take place {story.place}.
        </Text>
        <Text>{story.hero}</Text>
        <Text>{story.villain}</Text>
        <Text>{story.place}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default StoryScreen;
