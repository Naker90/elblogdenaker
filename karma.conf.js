const webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
      basePath: '',
      frameworks: ['jasmine'],
      preprocessors: {
          'spec/dependencies.js': ['webpack']
      },
      files: [
        'spec/dependencies.js',
        'spec/**/*.spec.js'
      ],
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity,
      webpack: webpackConfig
  })
};
