const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync({
    ...env,
    babel: {
      dangerouslyAddModulePathsToTranspile: [
        'mui-datatables',
        '@material-ui/core',
        '@material-ui/icons'
      ],
    },
  }, argv)

  return config;
};
