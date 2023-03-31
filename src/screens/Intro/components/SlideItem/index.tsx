import * as React from 'react';
import {View, StyleSheet, useWindowDimensions} from 'react-native';

import {SlideProps} from './types';

function SlideItem({children, slideStyles = {}}: SlideProps): JSX.Element {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, slideStyles, {width}]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});

export default SlideItem;
