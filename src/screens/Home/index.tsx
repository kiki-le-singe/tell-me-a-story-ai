import * as React from 'react';
import {Button, StyleSheet, ScrollView} from 'react-native';
// import Config from 'react-native-config';
// import {Configuration, OpenAIApi} from 'openai';

import {HomeScreenProps} from '../../routes/types';
import colors from '../../utils/colors';

import thinkingImage from '../../assets/images/thinking.jpg';
import helpImage from '../../assets/images/help.jpg';
import pickImage from '../../assets/images/pick.jpg';
import readImage from '../../assets/images/read.jpg';
import Explanation from './components/Explanation';
import {Position} from './components/Explanation/types';

function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
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
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <Explanation
        textPosition={Position.Right}
        text="Don't you have any inspiration?"
        textStyles={{color: colors.PURPLE}}
        image={thinkingImage}
        imageStyles={styles.inspirationImage}
      />
      <Explanation
        text="It's ok, let's help you!"
        textStyles={{color: colors.GREEN}}
        image={helpImage}
        imageStyles={styles.helpImage}
      />
      <Explanation
        textPosition={Position.Right}
        text="Just choose what you want..."
        textStyles={{color: colors.ORANGE}}
        image={pickImage}
        imageStyles={styles.pickImage}
      />
      <Explanation
        text="And just read your story!"
        textStyles={{color: colors.BLUE_GREEN}}
        image={readImage}
        imageStyles={styles.readImage}
      />

      <Button
        title="Go to List of products"
        onPress={() => navigation.navigate('Products')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainerStyle: {
    paddingTop: 30,
    alignItems: 'center',
  },
  inspirationImage: {
    borderColor: colors.PURPLE,
  },
  helpImage: {
    borderColor: colors.GREEN,
  },
  pickImage: {
    borderColor: colors.ORANGE,
  },
  readImage: {
    borderColor: colors.BLUE_GREEN,
  },
});

export default HomeScreen;
