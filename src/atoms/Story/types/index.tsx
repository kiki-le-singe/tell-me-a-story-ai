export type TStoryKey = 'hero' | 'villain' | 'place';

export type TStory = {
  [key in TStoryKey]?: string;
};
