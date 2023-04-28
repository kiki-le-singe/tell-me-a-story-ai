// See this other way: https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression

export type TStoryKey = 'hero' | 'villain' | 'place';

export type TStory = {
  [key in TStoryKey]?: string;
};
