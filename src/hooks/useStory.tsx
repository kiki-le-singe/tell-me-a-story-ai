import * as React from 'react';
import {Configuration, OpenAIApi} from 'openai';
import Config from 'react-native-config';

import {ImagesState, defaultState} from '../screens/Story/types';
import {TUseStory, TUseStoryReturn} from './types';

const configuration = new Configuration({
  apiKey: Config.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function useStory({
  content = '',
  prompt = '',
}: TUseStory): TUseStoryReturn {
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState<string | undefined>('');
  const [images, setImages] = React.useState<ImagesState[]>([defaultState]);

  const fetchImagesStory = React.useCallback(async () => {
    try {
      const response = await openai.createImage({
        prompt: `${prompt}, digital art`,
        n: 5,
        size: '256x256',
      });

      setImages(response.data.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error:', error);
        console.log('error.message:', error.message);
      }
    }
  }, [prompt]);

  const fetchStory = React.useCallback(async () => {
    try {
      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{role: 'user', content}],
      });

      const _message = completion.data.choices[0].message;

      setMessage(_message?.content);
    } catch (error) {
      if (error instanceof Error) {
        console.log('error:', error);
        console.log('error.message:', error.message);
      }
    }
  }, [content]);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await fetchStory();
      await fetchImagesStory();
      setIsLoading(false);
    };

    fetchData();
  }, [fetchStory, fetchImagesStory]);

  return {
    isLoading,
    message,
    images,
  };
}
