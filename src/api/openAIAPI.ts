import Config from 'react-native-config';

const headers = {
  Authorization: `Bearer ${Config.OPENAI_API_KEY}`,
};
const createTranscriptions = 'https://api.openai.com/v1/audio/transcriptions';
const createTranscriptionsHeaders = {
  ...headers,
  'Content-Type': 'multipart/form-data',
};

export default {
  createTranscriptionsHeaders,
  createTranscriptions,
};
