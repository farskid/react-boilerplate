const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const env = process.env.NODE_ENV

const envTask = (dev, prod) => {
  if (env === 'development') return dev
  else return prod
}

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  devtool: envTask('source-map', 'source-map'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: envTask('http://localhost:4000/dist/', '')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-2']
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(eot|ttf|woff|png|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    envTask(function () { }, new UglifyJSPlugin()),
    new ExtractTextPlugin('style.css')
  ]
}
