const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    javascript: "./app/index.jsx"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'] 
  },


devServer: {
proxy: {
'/api/*': {
target: 'http://localhost:8080/doecode/services',
secure: false,
changeOrigin: true,
pathRewrite: {
'^/api' : ''
}
}
}

}
,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },
      {
	test: /\.css$/,
	use: ['style-loader','css-loader']
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
	template: 'dist/index.html',
	inject: 'body'
	})]
}
