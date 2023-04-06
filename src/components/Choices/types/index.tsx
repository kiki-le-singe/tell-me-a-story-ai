import {ImageSourcePropType} from 'react-native/types';

export type TChoice = {
  label: string;
  image: ImageSourcePropType;
};

export type ChoicesProps = {
  id: string;
  data: TChoice[];
  text: string;
  containerStyles?: object;
};
