"use strict"

const shopUrl = require('./elements/shopUrl'),
  CommonPage = require('./common'),
  PageObjectElement = require('./utils/poe');

const helperElement = new PageObjectElement();

class MainPage extends CommonPage {
  constructor() {
    super();
    this.url = shopUrl['main page'].value;
    this.search = helperElement.getSelector('search');
  }
  sendBy(alias, text) {
    return helperElement.getSelector(alias).sendKeys(text);
  }
  scrollPage(alias) {
    return browser.executeScript('arguments[0].scrollIntoView()', helperElement.getSelector(alias).getWebElement());
  }
}

module.exports = MainPage;
