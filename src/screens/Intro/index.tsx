import * as React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';

import {IntroScreenProps} from '../../routes/types';
import SlideItem from './components/SlideItem';
import DotItem from './components/DotItem';
import {SlideItemProps, TIntro, TStyles} from './types';

const DATA: TIntro[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'Slide 1',
  },
  {
    id: 'bd7acbea-c1b1-kjad79-aed5-3ad53abb28ba',
    text: 'Slide 2',
  },
  {
    id: 'dnl89-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'Slide 3',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-dnl6AD',
    text: 'Slide 4',
  },
  {
    id: 'nklNK76-c1b1-39jd-aed5-ADHF',
    text: 'Slide 5',
  },
];

function IntroScreen({navigation}: IntroScreenProps): JSX.Element {
  function renderSlideItem({item, index}: SlideItemProps): JSX.Element {
    return (
      <SlideItem slideStyles={styles[`slide${index}`]}>
        <Text style={styles.text}>{item.text}</Text>
      </SlideItem>
    );
  }

  function renderPagination(): JSX.Element {
    return (
      <View style={styles.pagination}>
        {DATA.map((element, index) => (
          <DotItem key={`Pagination_${index}`} index={index} />
        ))}
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={DATA}
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderSlideItem}
        horizontal
        pagingEnabled
      />
      {renderPagination()}
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
  pagination: {
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: '5%',
    justifyContent: 'center',
    width: '100%',
  },
});

export default IntroScreen;
