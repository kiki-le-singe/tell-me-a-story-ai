import * as React from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';
import {DotProps} from './types';

function DotItem({isSelected, index, scrollXValue}: DotProps): JSX.Element {
  const {width} = useWindowDimensions();
  const backgroundColorStyles = isSelected ? styles.selected : {};

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const animatedWidth = scrollXValue.interpolate({
    inputRange,
    outputRange: [5, 24, 5],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[styles.container, backgroundColorStyles, {width: animatedWidth}]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255, 0.6)',
  },
  selected: {
    backgroundColor: 'white',
  },
});

export default DotItem;
