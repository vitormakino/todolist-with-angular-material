import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('md-toolbar span')).getText();
  }

  getListName() {
    return element(by.css('md-card-title h3')).getText();
  }

  getTodoInputPlaceHolder() {
    return element(by.css('md-form-field input')).getAttribute('placeholder');
  }
}
