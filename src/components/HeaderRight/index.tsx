import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {SettingsIcon} from '../../assets/icons/Settings';
import {RootStackParamList} from '../../routes/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function HeaderRight(): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function onPress() {
    navigation.navigate('Settings');
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <SettingsIcon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default React.memo(HeaderRight);
