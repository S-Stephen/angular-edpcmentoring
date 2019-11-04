// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

// custom launcher: https://medium.com/faun/configuring-travis-ci-for-angular-application-34afee1715f

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },

    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'],
    singleRun: false,
    customLaunchers: {
      ChromeHeadlessNoSandbox: { // used in travis-ci
        base: 'ChromeHeadless',
        flags: ['--no-sandbox',
          '--remote-debugging-port=9222'
        ]
      }
    }
  });
};