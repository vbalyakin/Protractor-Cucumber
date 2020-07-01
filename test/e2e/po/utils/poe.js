const shopSelector = require('../../po/elements/shopSelectors.json'),
  shopUrl = require('../../po/elements/shopUrl.json'),
  protractor = require('protractor'),
  EC = protractor.ExpectedConditions;


class PageObjectElement {
  unifyAlias(alias) {
    return alias.toLowerCase().trim();
  }
  getSelector(alias) {
    let pageElement = shopSelector[this.unifyAlias(alias)];
    return $(pageElement.selector);
  }
  getUrlForVisit(alias) {
    const visitPage = shopUrl[this.unifyAlias(alias)].value,
      startStorePage = shopUrl['main page'].value;
    return (visitPage === startStorePage) ?
    startStorePage : startStorePage.concat(visitPage);
  }
  mousePerform(alias) {
    const element = this.getSelector(alias);
    browser.actions().mouseMove(element).perform();
  }
  isVisible(alias) {
    return this.getSelector(alias).isPresent();
  }
  isClickable(alias) {
    const element = this.getSelector(alias);
    return browser.wait(EC.elementToBeClickable(element));
  }
}

module.exports = PageObjectElement;
