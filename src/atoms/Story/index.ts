import {atom} from 'recoil';

import {TStory} from './types';

const defaultValue: TStory = {
  hero: 'Giraffe',
  villain: 'Zombies',
  place: 'Beach',
};

const storyState = atom({
  key: 'storyState',
  default: defaultValue,
});

export {storyState};
