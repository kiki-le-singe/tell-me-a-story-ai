import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import {WriteStoryScreenProps} from '../../routes/types';
import colors from '../../utils/colors';

import writtingImage from '../../assets/images/writting.jpg';
import readImage from '../../assets/images/relax-and-read.jpg';
import Explanation from '../../components/Explanation';
import {Position} from '../../components/Explanation/types';

function WriteStoryScreen({navigation}: WriteStoryScreenProps): JSX.Element {
  const [story, onChangeStory] = React.useState('');
  function handlePress() {
    navigation.navigate('Story', {story});
  }

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
