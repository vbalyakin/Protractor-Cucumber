"use strict"

const shopUrl = require('./elements/shopUrl'),
  PageObjectElement = require('./utils/poe');

const helperElement = new PageObjectElement();


class CommonPage {
  visit(urlName) {
    return browser.get(helperElement.getUrlForVisit(urlName));
  }
  buttonClick(element) {
    return helperElement.getSelector(element).click();
  }
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
  getPageUrl() {
    return this.url;
  }
}

module.exports = CommonPage;
