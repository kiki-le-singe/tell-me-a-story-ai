import {ImageSourcePropType} from 'react-native/types';

export type TChoice = {
  label: string;
  image: ImageSourcePropType;
};

export type ChoicesProps = {
  data: TChoice[];
  text: string;
  containerStyles?: object;
};
