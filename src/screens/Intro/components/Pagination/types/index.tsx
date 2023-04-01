import {Animated} from 'react-native/types';

import {TIntro} from '../../../types';

export type TPaginationProps = {
  data: TIntro[];
  selectedIndex: number;
  scrollXValue: Animated.Value;
};
