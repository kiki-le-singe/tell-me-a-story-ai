import {TStoryKey} from '../../../../../atoms/Story/types';
import {TChoice} from '../../../types';

export type ChoiceItemProps = {
  id: TStoryKey; // hero, villain, place
  isSelected: boolean;
  setSelectedIndex: (index: number) => void;
  index: number;
  data: TChoice;
};
