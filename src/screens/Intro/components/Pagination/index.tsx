import * as React from 'react';
import {StyleSheet, View} from 'react-native';

import {TPaginationProps} from './types';
import DotItem from '../DotItem';

function Pagination({
  data,
  selectedIndex,
  scrollXValue,
}: TPaginationProps): JSX.Element {
  return (
    <View style={styles.container}>
      {data.map((element, index) => {
        const isSelected = selectedIndex === index;
        return (
          <DotItem
            key={`Pagination_${index}`}
            index={index}
            isSelected={isSelected}
            scrollXValue={scrollXValue}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: '5%',
    justifyContent: 'center',
    width: '100%',
  },
});

export default Pagination;
