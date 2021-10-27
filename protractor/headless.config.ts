import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  framework: 'jasmine',
  specs: ['../test/google.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
