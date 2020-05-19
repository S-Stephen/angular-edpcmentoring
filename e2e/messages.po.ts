import { browser, by, element } from 'protractor';

export class MessagesPage {
  navigateTo() {
    return browser.get('/test/messages');
  }

  pressRaiseAlterButton() {
    return element(by.id('raisealert')).click();
  }

  getAlertIcon(){
    return element(by.css('.campl-alert-icon')).getText();
  }
}
