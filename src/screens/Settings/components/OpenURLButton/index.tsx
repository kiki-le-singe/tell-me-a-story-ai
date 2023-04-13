import * as React from 'react';
import {Linking, Button} from 'react-native';

import {OpenURLButtonProps} from './types';

function OpenURLButton({element}: OpenURLButtonProps): JSX.Element {
  const {url, author} = element;

  const handlePress = React.useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open this URL:", url);
    }
  }, [url]);

  return <Button title={author} onPress={handlePress} />;
}

export default OpenURLButton;
