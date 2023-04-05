import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {ChoicesProps} from './types';
import colors from '../../utils/colors';

function Choices({data, text, containerStyles}: ChoicesProps): JSX.Element {
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {data.map((element, index) => (
          <TouchableOpacity key={`choice_${index}`} style={styles.content}>
            <Image style={styles.image} source={element.image} />
            <Text style={styles.label}>{element.label}</Text>
          </TouchableOpacity>
        ))}
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
  content: {
    alignItems: 'center',
    gap: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
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

export default Choices;
