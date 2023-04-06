import * as React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSetRecoilState} from 'recoil';

import {ChoiceItemProps} from './types';
import colors from '../../../../utils/colors';
import {storyState} from '../../../../atoms/Story';

function ChoiceItem({id, data}: ChoiceItemProps): JSX.Element {
  const setStory = useSetRecoilState(storyState);
  const {label} = data;

  function onPress() {
    console.log(id);
    setStory({
      [id]: label,
    });
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <Text style={styles.label}>{label}</Text>
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
  label: {
    color: colors.BLUE_DARK,
  },
});

export default ChoiceItem;
