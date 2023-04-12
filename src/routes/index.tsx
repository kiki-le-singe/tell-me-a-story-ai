import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

import HomeScreen from '../screens/Home';
import WriteStoryScreen from '../screens/WriteStory';
import DetailsScreen from '../screens/Details';
import IntroScreen from '../screens/Intro';
import StoryScreen from '../screens/Story';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerTintColor: colors.ORANGE,
          headerTitleStyle: {color: colors.WHITE},
          headerStyle: {
            backgroundColor: colors.BLUE_DARK,
          },
        }}>
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          options={{
            title: 'Tell Me A Story...',
            headerBackVisible: false,
          }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="WriteStory"
          options={{
            title: 'Write Your Own Story...',
          }}
          component={WriteStoryScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
        <Stack.Screen
          name="Story"
          component={StoryScreen}
          initialParams={{story: undefined}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Routes;
