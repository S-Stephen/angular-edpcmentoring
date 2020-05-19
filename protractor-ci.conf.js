// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

var generalConfig = require('./protractor.conf.js').config;

generalConfig.capabilities ={
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless" ]
    }
}

exports.config = generalConfig;