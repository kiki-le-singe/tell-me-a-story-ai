module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // CAUTION: Reanimated plugin has to be listed last.
    'react-native-reanimated/plugin',
  ],
};
