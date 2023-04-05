import React from 'react';
import {Animated} from 'react-native/types';

export type DotProps = React.PropsWithChildren<{
  isSelected?: boolean;
  index: number;
  scrollXValue: Animated.Value;
}>;
