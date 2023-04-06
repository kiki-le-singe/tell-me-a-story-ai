import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRecoilValue} from 'recoil';

import {StoryScreenProps} from '../../routes/types';
import {storyState} from '../../atoms/Story';

function StoryScreen({navigation}: StoryScreenProps): JSX.Element {
  const story = useRecoilValue(storyState);

  return (
    <View style={styles.container}>
      <View>
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
