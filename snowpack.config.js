module.exports = {
  'extends': '@snowpack/app-scripts-react',
  'plugins': ['@snowpack/plugin-webpack', '@snowpack/plugin-dotenv'],
  'scripts': {
    // "bundle:*": "@snowpack/plugin-webpack"
  },
  'devOptions': {
    'port': 5555,
    'hostname': 'localhost',
    'fallback': 'index.html',
  },
};
