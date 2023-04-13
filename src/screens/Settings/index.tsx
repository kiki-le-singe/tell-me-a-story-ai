import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {SettingsScreenProps} from '../../routes/types';
import colors from '../../utils/colors';
import OpenURLButton from './components/OpenURLButton';

const DATA = [
  {
    author: 'freepik',
    url: 'https://www.freepik.com/author/freepik',
  },
  {
    author: 'ddraw',
    url: 'https://www.freepik.com/author/ddraw',
  },
  {
    author: 'vectorjuice',
    url: 'https://www.freepik.com/author/vectorjuice',
  },
  {
    author: 'pikisuperstar',
    url: 'https://www.freepik.com/author/pikisuperstar',
  },
  {
    author: 'pch.vector',
    url: 'https://www.freepik.com/author/pch-vector',
  },
  {
    author: 'catalyststuff',
    url: 'https://www.freepik.com/author/catalyststuff',
  },
  {
    author: 'rawpixel-com',
    url: 'https://www.freepik.com/author/rawpixel-com',
  },
  {
    author: 'upklyak',
    url: 'https://www.freepik.com/author/upklyak',
  },
  {
    author: 'brgfx',
    url: 'https://www.freepik.com/author/brgfx',
  },
  {
    author: 'storyset',
    url: 'https://www.freepik.com/author/stories',
  },
  {
    author: 'unDraw',
    url: 'https://undraw.co/',
  },
];

function StoryScreen({navigation}: SettingsScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of the authors</Text>
      {DATA.map((element, index) => {
        return (
          <OpenURLButton key={`OpenURLButton_${index}`} element={element} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  title: {
    fontSize: 22,
    color: colors.ORANGE,
    marginBottom: 50,
  },
});

export default StoryScreen;
