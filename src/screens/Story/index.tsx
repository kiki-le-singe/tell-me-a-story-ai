import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {StoryScreenProps} from '../../routes/types';

function StoryScreen({navigation}: StoryScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Story Screen</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default StoryScreen;
