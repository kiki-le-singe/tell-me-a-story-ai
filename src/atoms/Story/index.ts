import {atom} from 'recoil';

import {TStory} from './types';

const defaultValue: TStory = {
  hero: 'a Giraffe',
  villain: 'Zombies',
  place: 'at the Beach',
};

const storyState = atom({
  key: 'storyState',
  default: defaultValue,
});

export {storyState};
