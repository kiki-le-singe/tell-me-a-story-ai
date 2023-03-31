export type TIntro = {
  id: string;
  text: string;
};

export type TStyles = {
  [key: string]: object;
};

export type SlideItemProps = {
  item: TIntro;
  index: number;
};
