const path = require('path');
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          extensions: [
            '.js',
            '.ts',
            '.ios.js',
            '.ios.ts',
            '.android.js',
            '.android.ts',
            '.json',
            '.tsx',
          ],
          alias: {
            atoms: path.resolve(__dirname, './src/components/atoms'),
            molecules: path.resolve(__dirname, './src/components/molecules'),
            organisms: path.resolve(__dirname, './src/components/organisms'),
            templates: path.resolve(__dirname, './src/components/templates'),
            context: path.resolve(__dirname, './src/context'),
            modules: path.resolve(__dirname, './src/state/modules/index.ts'),
            models: path.resolve(__dirname, './src/state/models'),
            repositories: path.resolve(__dirname, './src/state/repositories'),
            services: path.resolve(__dirname, './src/state/services'),
            store: path.resolve(__dirname, './src/state/store'),
            theme: path.resolve(__dirname, './src/theme'),
            hooks: path.resolve(__dirname, './src/hooks'),
            nav: path.resolve(__dirname, './src/navigation'),
            navTypes: path.resolve(__dirname, './src/navigation/types.ts'),
            screens: path.resolve(__dirname, './src/screens'),
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
          blacklist: null,
          whitelist: ['API_KEY'],
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
