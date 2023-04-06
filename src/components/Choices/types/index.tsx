import {ImageSourcePropType} from 'react-native/types';

import {TStoryKey} from '../../../atoms/Story/types';

export type TChoice = {
  label: string;
  image: ImageSourcePropType;
};

export type ChoicesProps = {
  id: TStoryKey;
  data: TChoice[];
  text: string;
  containerStyles?: object;
};
