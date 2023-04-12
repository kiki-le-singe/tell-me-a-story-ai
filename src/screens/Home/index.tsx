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
    sentence: 'a Giraffe',
    image: require('../../assets/images/giraffe.jpg'),
  },
  {
    label: 'Vampire',
    sentence: 'a Vampire',
    image: require('../../assets/images/vampire.jpg'),
  },
  {
    label: 'Dog',
    sentence: 'a Dog',
    image: require('../../assets/images/dog.jpg'),
  },
  {
    label: 'Cat',
    sentence: 'a Cat',
    image: require('../../assets/images/cat.jpg'),
  },
  {
    label: 'Alien',
    sentence: 'an Alien',
    image: require('../../assets/images/alien.jpg'),
  },
  {
    label: 'Dragon',
    sentence: 'a Dragon',
    image: require('../../assets/images/dragon.jpg'),
  },
  {
    label: 'Pig',
    sentence: 'a Pig',
    image: require('../../assets/images/pig.jpg'),
  },
];

const DATAVillains = [
  {
    label: 'Zombies',
    sentence: 'Zombies',
    image: require('../../assets/images/zombies.jpg'),
  },
  {
    label: 'Shark',
    sentence: 'a Shark',
    image: require('../../assets/images/shark.jpg'),
  },
  {
    label: 'Octopus',
    sentence: 'an Octopus',
    image: require('../../assets/images/octopus.jpg'),
  },
  {
    label: 'Alien',
    sentence: 'an Alien',
    image: require('../../assets/images/alien.jpg'),
  },
  {
    label: 'Wolf',
    sentence: 'a Wolf',
    image: require('../../assets/images/wolf.jpg'),
  },
  {
    label: 'Vampire',
    sentence: 'a Vampire',
    image: require('../../assets/images/vampire.jpg'),
  },
  {
    label: 'Dragon',
    sentence: 'a Dragon',
    image: require('../../assets/images/dragon.jpg'),
  },
];

const DATAPlaces = [
  {
    label: 'Beach',
    sentence: 'at the Beach',
    image: require('../../assets/images/beach.jpg'),
  },
  {
    label: 'Mountains',
    sentence: 'in the Mountains',
    image: require('../../assets/images/mountain.jpg'),
  },
  {
    label: 'Forest',
    sentence: 'in the Forest',
    image: require('../../assets/images/forest.jpg'),
  },
  {
    label: 'Snowy Mountain',
    sentence: 'in the Snowy Mountains',
    image: require('../../assets/images/snowy-mountain.jpg'),
  },
  {
    label: 'Galaxy',
    sentence: 'in the Galaxy',
    image: require('../../assets/images/galaxy.jpg'),
  },
  {
    label: 'Desert',
    sentence: 'in the Desert',
    image: require('../../assets/images/desert.jpg'),
  },
  {
    label: 'Unknown Planet',
    sentence: 'on the Unknown Planet',
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
          <Text style={styles.buttonText}>
            (Coming soon...) Write your own story
          </Text>
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
    maxWidth: 200,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.WHITE,
    fontSize: 20,
  },
});

export default HomeScreen;
