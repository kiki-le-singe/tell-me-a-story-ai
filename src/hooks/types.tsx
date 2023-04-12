import {ImagesState} from '../screens/Story/types';

export type TUseStory = {
  content: string;
  prompt: string;
};

export type TUseStoryReturn = {
  isLoading: boolean;
  message: string | undefined;
  images: ImagesState[];
};
