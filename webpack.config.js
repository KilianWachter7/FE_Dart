module.exports = {
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    //   {
    //     test: /\.jsx?$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //     query: {
    //         presets: ['es2015']
    //     }
    // }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
