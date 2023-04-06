/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';

import Routes from './src/routes';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
