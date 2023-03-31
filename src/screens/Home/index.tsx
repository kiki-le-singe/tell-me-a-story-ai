import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import {Configuration, OpenAIApi} from 'openai';

import {HomeScreenProps} from '../../routes/types';

function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  React.useEffect(() => {
    const fetchData = async () => {
      const configuration = new Configuration({
        apiKey: Config.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      try {
        const response = await openai.createImage({
          prompt: 'a white siamese cat',
          n: 5,
          size: '512x512',
          user: Config.OPENAI_USER_IDENTIFIER,
        });

        const imageUrl = response.data.data[0].url;
        console.log(imageUrl);
        console.log(response.data);
        debugger;
      } catch (error) {
        debugger;
        if (error instanceof Error) {
          console.log(error);
          console.log(error.message);
          debugger;
        }
      }
    };

    // fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to List of products"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default HomeScreen;
