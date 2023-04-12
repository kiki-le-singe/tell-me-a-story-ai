import {NativeStackScreenProps} from '@react-navigation/native-stack';

type TStoryParams = {
  story?: string | undefined;
};

export type RootStackParamList = {
  Intro: object | undefined;
  Home: object | undefined;
  WriteStory: object | undefined;
  Story: TStoryParams | undefined;
};

export type IntroScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Intro'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type WriteStoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'WriteStory'
>;

export type StoryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Story'
>;
