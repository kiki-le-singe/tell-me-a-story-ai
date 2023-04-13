import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import HomeScreen from '../screens/Home';
import WriteStoryScreen from '../screens/WriteStory';
import IntroScreen from '../screens/Intro';
import StoryScreen from '../screens/Story';
import SettingsScreen from '../screens/Settings';
import colors from '../utils/colors';
import {HeaderRight} from '../components/HeaderRight';

const Stack = createNativeStackNavigator<RootStackParamList>();
const headerRight = () => <HeaderRight />;

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
          headerRight,
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
      </Stack.Group>

      <Stack.Group screenOptions={{presentation: 'modal', headerShown: false}}>
        <Stack.Screen
          name="Story"
          component={StoryScreen}
          initialParams={{story: undefined}}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Routes;
