import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';

import HomeScreen from '../screens/Home';
import ProductsScreen from '../screens/Products';
import DetailsScreen from '../screens/Details';
import IntroScreen from '../screens/Intro';
import colors from '../utils/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes(): JSX.Element {
  return (
    <Stack.Navigator>
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
          headerTintColor: colors.WHITE,
          headerBackVisible: false,
          headerStyle: {
            backgroundColor: colors.BLUE_DARK,
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Routes;
