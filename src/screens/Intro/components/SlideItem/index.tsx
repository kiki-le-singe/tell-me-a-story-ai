import * as React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {SlideProps} from './types';
import colors from '../../../../utils/colors';
import {RootStackParamList} from '../../../../routes/types';

function SlideItem({
  children,
  slideStyles = {},
  isLastItem = false,
  isLastItemSelected = false,
}: SlideProps): JSX.Element {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {width} = useWindowDimensions();

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);
  const translateY = useSharedValue(1000);

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {duration: 1200}),
      transform: [
        {scale: withTiming(scale.value, {duration: 1200})},
        {translateY: withTiming(translateY.value, {duration: 800})},
      ],
    };
  });

  const handlePress = () => {
    navigation.navigate('Home');
  };

  // Start animation when the component is mounted
  React.useEffect(() => {
    if (isLastItemSelected) {
      opacity.value = 1;
      scale.value = 1;
      translateY.value = 0;
    }
  }, [isLastItemSelected, opacity, scale, translateY]);

  return (
    <View style={[styles.container, slideStyles, {width}]}>
      {children}

      {isLastItem && (
        <TouchableOpacity
          onPress={handlePress}
          style={styles.skipButtonContainer}>
          <Animated.View style={[styles.skipButtonContent, buttonStyle]}>
            <Text style={styles.skipText}>Let's Go!</Text>
          </Animated.View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
    gap: 10,
  },
  skipButtonContainer: {
    position: 'absolute',
    bottom: '12%',
  },
  skipButtonContent: {
    backgroundColor: colors.ORANGE,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: colors.WHITE,
  },
  skipText: {
    color: colors.WHITE,
    fontSize: 20,
  },
});

export default SlideItem;
