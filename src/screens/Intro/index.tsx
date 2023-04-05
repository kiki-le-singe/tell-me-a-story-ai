import * as React from 'react';
import {StyleSheet, Text, FlatList, Animated, Image} from 'react-native';

import {IntroScreenProps} from '../../routes/types';
import SlideItem from './components/SlideItem';
import {
  SlideItemProps,
  TIntro,
  TStyles,
  OnViewableItemsChangedProps,
} from './types';
import Pagination from './components/Pagination';
import colors from '../../utils/colors';

const DATA: TIntro[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    text: "Don't you have any inspiration?",
    image: require('../../assets/images/thinking.jpg'),
  },
  {
    id: 'bd7acbea-c1b1-kjad79-aed5-3ad53abb28ba',
    text: "It's ok, let's help you!",
    image: require('../../assets/images/help.jpg'),
  },
  {
    id: 'dnl89-c1b1-46c2-aed5-3ad53abb28ba',
    text: 'Just choose what you want...',
    image: require('../../assets/images/pick.jpg'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-dnl6AD',
    text: 'And just read the story!',
    image: require('../../assets/images/read.jpg'),
  },
  {
    id: 'bd8acbWa-c23b1-46V2-aF55-dnl6AD',
    text: 'You can also write your own story!',
    image: require('../../assets/images/writting.jpg'),
  },
  {
    id: 'Zd8acbWa-6Hu9b1-32cdfE6V2-aF55-dXl6AD',
    text: 'And just read your story!',
    image: require('../../assets/images/relax-and-read.jpg'),
  },
];

function IntroScreen({navigation}: IntroScreenProps): JSX.Element {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const scrollXValue = React.useRef(new Animated.Value(0)).current;
  const dataLength = DATA.length;
  const lastIndex = dataLength - 1;
  const isLastItemSelected = lastIndex === selectedIndex;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const onViewableItemsChanged = ({
    viewableItems,
  }: OnViewableItemsChangedProps) => {
    const index = viewableItems[0].index ?? 0;
    console.log('index', index);
    setSelectedIndex(index);
  };
  const viewabilityConfigCallbackPairs = React.useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollXValue}}}],
    {
      useNativeDriver: false,
    },
  );

  function renderSlideItem({item, index}: SlideItemProps): JSX.Element {
    const isLastItem = index === lastIndex;

    return (
      <SlideItem
        isLastItemSelected={isLastItemSelected}
        isLastItem={isLastItem}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </SlideItem>
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
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onScroll={onScroll}
        horizontal
        pagingEnabled
      />
      <Pagination
        data={DATA}
        selectedIndex={selectedIndex}
        scrollXValue={scrollXValue}
      />
    </>
  );
}

const styles: TStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  image: {width: 300, height: 300},
  text: {
    color: colors.BLUE_DARK,
    fontSize: 22,
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
