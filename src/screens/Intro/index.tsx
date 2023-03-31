import * as React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';

import {IntroScreenProps} from '../../routes/types';
import SlideItem from './components/SlideItem';
import {TIntro, TStyles} from './types';

const data: TIntro[] = [
  {text: 'Slide 1'},
  {text: 'Slide 2'},
  {text: 'Slide 3'},
  {text: 'Slide 4'},
  {text: 'Slide 5'},
];

function IntroScreen({navigation}: IntroScreenProps): JSX.Element {
  function renderSlideItems(): JSX.Element[] {
    return data.map((element, index) => (
      <SlideItem
        key={`slideItem_${index}`}
        slideStyles={styles[`slide${index}`]}>
        <Text style={styles.text}>{element.text}</Text>
      </SlideItem>
    ));
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled>
        {renderSlideItems()}
      </ScrollView>
    </>
  );
}

const styles: TStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181C25',
    // backgroundColor: '#F7AB8D',
    // backgroundColor: '#0596A3',
    // backgroundColor: '#F35E5F',
    // backgroundColor: '#FEEBE4',
    // backgroundColor: '#2C4A58',
    // backgroundColor: '#C6E9FB',
    // backgroundColor: '#FCCF69',
    // backgroundColor: '#D088E4',
    // backgroundColor: '#F57F3D',
  },
  slide0: {
    backgroundColor: '#80C690',
  },
  slide1: {
    backgroundColor: '#F35E5F',
  },
  slide2: {
    backgroundColor: '#0596A3',
  },
  slide3: {
    backgroundColor: '#FCCF69',
  },
  slide4: {
    backgroundColor: '#D088E4',
  },
  text: {
    color: 'white',
    fontSize: 28,
  },
});

export default IntroScreen;
