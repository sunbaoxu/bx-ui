var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  entry: NODE_ENV == 'development' ? './src/main.js' : './src/views/index.js',
	 output: {
	 	path: path.resolve(__dirname, './dist'),
	 	publicPath: '/dist/',//路径
	 	filename: 'bx-ui.js',//打包之后的名称
	 	library: 'bx-ui', // 指定的就是你使用require时的模块名
	 	libraryTarget: 'umd', // 指定输出格式
	 	umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
	 },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'vue-style-loader',
      //     'css-loader',
      //     'sass-loader'
      //   ],
      // },
      {
        test: /\.scss$/,
        use: process.env.NODE_ENV === 'production' ? ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'sass-loader']
        }) :[
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src'),
      '$view': path.resolve(__dirname, './src/views'),
      '$page': path.resolve(__dirname, './src/pages')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new ExtractTextPlugin("bxui.css",{allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
