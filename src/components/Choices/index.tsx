import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

import {ChoicesProps} from './types';
import colors from '../../utils/colors';
import ChoiceItem from './components/ChoiceItem';

function Choices({id, data, text, containerStyles}: ChoicesProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  function _setSelectedIndex(index: number) {
    setSelectedIndex(index);
  }

  function renderChoices(): JSX.Element[] {
    return data.map((element, index) => {
      const isSelected = selectedIndex === index;

      return (
        <ChoiceItem
          key={`choice_${index}`}
          isSelected={isSelected}
          setSelectedIndex={_setSelectedIndex}
          index={index}
          id={id}
          data={element}
        />
      );
    });
  }

  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {renderChoices()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
  },
  text: {
    paddingLeft: 20,
    paddingBottom: 6,
    marginBottom: 10,
    color: colors.ORANGE,
    fontSize: 20,
    fontWeight: '600',
  },
  contentContainerStyle: {
    gap: 10,
    paddingHorizontal: 20,
  },
});

export default Choices;
