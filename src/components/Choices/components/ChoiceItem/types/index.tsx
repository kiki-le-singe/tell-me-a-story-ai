import {TStoryKey} from '../../../../../atoms/Story/types';
import {TChoice} from '../../../types';

export type ChoiceItemProps = {
  id: TStoryKey; // hero, villain, place
  data: TChoice;
};
