import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Intro: object | undefined;
  Home: object | undefined;
  Products: object | undefined;
  Details: object | undefined;
};

export type IntroScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Intro'
>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type ProductsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Products'
>;

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
