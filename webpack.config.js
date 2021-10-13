const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'style-loader' },
          // [css-loader](/loaders/css-loader)
          {
            loader: 'css-loader',
            options: {
            modules: true,
            }
          },
          // [sass-loader](/loaders/sass-loader)
          { loader: 'sass-loader' 
        ]
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'build'),
    hot: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
        historyApiFallback: true,
      }
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
        template: './index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}