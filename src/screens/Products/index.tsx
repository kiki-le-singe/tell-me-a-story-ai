import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {ProductsScreenProps} from '../../routes/types';

function ProductsScreen({navigation}: ProductsScreenProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Products Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

export default ProductsScreen;
