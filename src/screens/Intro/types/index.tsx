import {ImageSourcePropType, ViewToken} from 'react-native/types';

export type OnViewableItemsChangedProps = {
  viewableItems: ViewToken[];
};

export type TIntro = {
  id: string;
  text: string;
  image: ImageSourcePropType;
};

export type TStyles = {
  [key: string]: object;
};

export type SlideItemProps = {
  item: TIntro;
  index: number;
};
