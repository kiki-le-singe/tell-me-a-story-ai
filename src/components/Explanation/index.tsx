import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {ExplanationProps, Position} from './types';
import colors from '../../utils/colors';

function Explanation({
  image,
  text,
  textPosition = Position.Left,
  imageStyles,
  textStyles,
  containerStyles,
}: ExplanationProps): JSX.Element {
  function renderText() {
    return <Text style={[styles.text, textStyles]}>{text}</Text>;
  }

  return (
    <View style={[styles.container, containerStyles]}>
      {textPosition === Position.Left && renderText()}
      <Image style={[styles.image, imageStyles]} source={image} />
      {textPosition === Position.Right && renderText()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.BLUE_DARK,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65,
    borderWidth: 0.2,
    borderColor: colors.BLUE_DARK,
  },
});

export default React.memo(Explanation);
