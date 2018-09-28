module.exports = {
  webpackConfig: require('./config/webpack.config.dev.js'),
  components: 'src/javascripts/components/**/*.{js,jsx,ts,tsx}',
  require: [ './src/index.scss' ]
};
