import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {ExplanationProps, Position} from './types';

function Explanation({
  image,
  text,
  textPosition = Position.Left,
  imageStyles,
  textStyles,
}: ExplanationProps): JSX.Element {
  function renderText() {
    return <Text style={[styles.text, textStyles]}>{text}</Text>;
  }

  return (
    <View style={styles.container}>
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
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65,
    borderWidth: 1,
  },
});

export default React.memo(Explanation);
