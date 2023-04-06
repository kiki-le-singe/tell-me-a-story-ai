import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {HomeScreenProps} from '../../routes/types';
import colors from '../../utils/colors';

import thinkingImage from '../../assets/images/thinking.jpg';
import helpImage from '../../assets/images/help.jpg';
import pickImage from '../../assets/images/pick.jpg';
import readImage from '../../assets/images/read.jpg';
import Explanation from '../../components/Explanation';
import {Position} from '../../components/Explanation/types';
import Choices from '../../components/Choices';

const DATAHeroes = [
  {
    label: 'Giraffe',
    image: require('../../assets/images/giraffe.jpg'),
  },
  {
    label: 'Vampire',
    image: require('../../assets/images/vampire.jpg'),
  },
  {
    label: 'Dog',
    image: require('../../assets/images/dog.jpg'),
  },
  {
    label: 'Cat',
    image: require('../../assets/images/cat.jpg'),
  },
  {
    label: 'Alien',
    image: require('../../assets/images/alien.jpg'),
  },
  {
    label: 'Dragon',
    image: require('../../assets/images/dragon.jpg'),
  },
  {
    label: 'Pig',
    image: require('../../assets/images/pig.jpg'),
  },
];

const DATAVillains = [
  {
    label: 'Zombies',
    image: require('../../assets/images/zombies.jpg'),
  },
  {
    label: 'Shark',
    image: require('../../assets/images/shark.jpg'),
  },
  {
    label: 'Octopus',
    image: require('../../assets/images/octopus.jpg'),
  },
  {
    label: 'Alien',
    image: require('../../assets/images/alien.jpg'),
  },
  {
    label: 'Wolf',
    image: require('../../assets/images/wolf.jpg'),
  },
  {
    label: 'Vampire',
    image: require('../../assets/images/vampire.jpg'),
  },
  {
    label: 'Dragon',
    image: require('../../assets/images/dragon.jpg'),
  },
];

const DATAPlaces = [
  {
    label: 'Beach',
    image: require('../../assets/images/beach.jpg'),
  },
  {
    label: 'Mountain',
    image: require('../../assets/images/mountain.jpg'),
  },
  {
    label: 'Forest',
    image: require('../../assets/images/forest.jpg'),
  },
  {
    label: 'Snowy Mountain',
    image: require('../../assets/images/snowy-mountain.jpg'),
  },
  {
    label: 'Galaxy',
    image: require('../../assets/images/galaxy.jpg'),
  },
  {
    label: 'Desert',
    image: require('../../assets/images/desert.jpg'),
  },
  {
    label: 'Planet',
    image: require('../../assets/images/planet.jpg'),
  },
];

function HomeScreen({navigation}: HomeScreenProps): JSX.Element {
  function handleReadStoryPress() {
    navigation.navigate('Story');
  }

  function handleWriteStoryPress() {
    navigation.navigate('WriteStory');
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <Explanation
        text="Don't you have any inspiration?"
        image={thinkingImage}
      />
      <Explanation
        textPosition={Position.Right}
        text="It's ok, let's help you!"
        image={helpImage}
      />
      <Explanation text="Just choose what you want..." image={pickImage} />
      <Explanation
        textPosition={Position.Right}
        text="And just read the story!"
        image={readImage}
      />

      <Choices
        id="hero"
        data={DATAHeroes}
        text="Choose a hero"
        containerStyles={styles.choices}
      />
      <Choices id="villain" data={DATAVillains} text="Choose a villain" />
      <Choices id="place" data={DATAPlaces} text="Choose a place" />

      <View style={styles.actions}>
        <TouchableOpacity
          onPress={handleReadStoryPress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Read the story</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleWriteStoryPress}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Write your own story</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 80,
    alignItems: 'center',
    gap: -12,
  },
  choices: {
    marginTop: 50,
  },
  actions: {
    marginTop: 50,
    gap: 20,
  },
  buttonContainer: {
    backgroundColor: colors.ORANGE,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.WHITE,
    fontSize: 20,
  },
});

export default HomeScreen;
