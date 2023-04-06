import {atom} from 'recoil';

import {TStory} from './types';

const defaultValue: TStory = {
  hero: '',
  villain: '',
  place: '',
};

const storyState = atom({
  key: 'storyState',
  default: defaultValue, // default value (aka initial value)
});

export {storyState};
