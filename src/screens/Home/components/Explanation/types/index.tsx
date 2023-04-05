import {ImageSourcePropType} from 'react-native/types';

export enum Position {
  Left = 'LEFT',
  Right = 'RIGHT',
}

export type ExplanationProps = {
  image: ImageSourcePropType;
  text: string;
  textPosition?: Position;
  imageStyles?: object;
  textStyles?: object;
};
