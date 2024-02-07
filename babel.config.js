module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      //require for expo-router
      "nativewind/babel",
      'react-native-reanimated/plugin',
    ]
  };
};
