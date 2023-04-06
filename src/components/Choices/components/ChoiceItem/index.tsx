import * as React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useRecoilState} from 'recoil';

import {ChoiceItemProps} from './types';
import colors from '../../../../utils/colors';
import {storyState} from '../../../../atoms/Story';

function ChoiceItem({
  id,
  isSelected,
  setSelectedIndex,
  index,
  data,
}: ChoiceItemProps): JSX.Element {
  const [story, setStory] = useRecoilState(storyState);
  const {label} = data;

  function onPress() {
    console.log('id category', id);
    console.log('index', index);

    setStory({
      ...story,
      [id]: label,
    });
    setSelectedIndex(index);
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={[styles.image, isSelected && styles.selectedImage]}
        source={data.image}
      />
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80,
    borderWidth: 0.2,
    borderColor: colors.BLUE_DARK,
  },
  selectedImage: {
    borderWidth: 2,
    borderColor: colors.ORANGE_DARK,
  },
  label: {
    color: colors.BLUE_DARK,
  },
  selectedLabel: {
    color: colors.ORANGE_DARK,
  },
});

export default ChoiceItem;
