import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {DotProps} from './types';

function DotItem({isSelected}: DotProps): JSX.Element {
  const backgroundColorStyles = isSelected ? styles.selected : {};

  return <View style={[styles.container, backgroundColorStyles]} />;
}

const styles = StyleSheet.create({
  container: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255, 0.6)',
  },
  selected: {
    backgroundColor: 'white',
  },
});

export default DotItem;
