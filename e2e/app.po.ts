import { browser, by, element } from 'protractor';

export class EdpcmentoringNg8Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getPageTitleText(){
    return element(by.css('p.campl-page-title')).getText();
  }
}
