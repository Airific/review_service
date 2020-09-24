const path = require('path');

const clientDir = path.join(__dirname, '/client');
const publicDir = path.join(__dirname, '/public');

module.exports = {
  entry: `${clientDir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: publicDir,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: clientDir,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
};
