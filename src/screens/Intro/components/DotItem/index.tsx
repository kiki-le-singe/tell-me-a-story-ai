import * as React from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';
import {DotProps} from './types';
import colors from '../../../../utils/colors';

function DotItem({index, scrollXValue}: DotProps): JSX.Element {
  const {width} = useWindowDimensions();

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const animatedBackgroundColor = scrollXValue.interpolate({
    inputRange,
    outputRange: [colors.ORANGE, colors.ORANGE_DARK, colors.ORANGE],
    extrapolate: 'clamp',
  });

  const animatedWidth = scrollXValue.interpolate({
    inputRange,
    outputRange: [5, 24, 5],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {width: animatedWidth, backgroundColor: animatedBackgroundColor},
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 5,
    borderRadius: 10,
  },
});

export default DotItem;
