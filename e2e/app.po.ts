import { browser, element, by } from 'protractor';

export class YgAngularAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('yg-root h1')).getText();
  }
}
