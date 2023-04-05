import * as React from 'react';
import {StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';

import {WriteStoryScreenProps} from '../../routes/types';
import colors from '../../utils/colors';

import writtingImage from '../../assets/images/writting.jpg';
import readImage from '../../assets/images/relax-and-read.jpg';
import Explanation from '../../components/Explanation';
import {Position} from '../../components/Explanation/types';

function WriteStoryScreen({navigation}: WriteStoryScreenProps): JSX.Element {
  function handlePress() {
    // navigation.navigate('Story');
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
  },
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
    gap: -12,
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
