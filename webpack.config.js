const path = require("path");

module.exports = {
  entry: {
    'index': path.resolve(__dirname, './index.jsx'),
  },
  target: 'web',
  output: {
    clean: true,
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'production',
  devtool: 'cheap-source-map',
  optimization: {
    minimize: false,
    usedExports: false,
    innerGraph: false,
    mangleExports: false,
    concatenateModules: false,
    sideEffects: 'flag',
    providedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(jsx?)$/,
        include: path.resolve(__dirname, '.'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: false,
            presets: [
              '@babel/preset-react',
              ['@babel/preset-env', {
                "useBuiltIns": "entry",
                "modules": false
              }]
            ],
            plugins: [],
          },
        },
      },
    ],
  },
}
