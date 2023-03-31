import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {DotProps} from './types';

function DotItem({index}: DotProps): JSX.Element {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default DotItem;
