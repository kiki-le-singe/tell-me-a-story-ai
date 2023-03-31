import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {DetailsScreenProps} from '../../routes/types';

function DetailsScreen({navigation}: DetailsScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default DetailsScreen;
