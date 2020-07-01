const PageObjectElement = require('../../po/utils/poe');

const helperElement = new PageObjectElement();

function highlightElement(alias) {
    const styleOptions = 'color: Red; border: 2px solid red;',
     webElement = helperElement.getSelector(alias).getWebElement(),
     script = 'arguments[0].setAttribute("style", arguments[1]);';
    return browser.executeScript(script, webElement, styleOptions).then(() => {
      return browser.wait(() => {
         return helperElement.getSelector(alias).getCssValue('border').then((border) => {
            return border.toString().indexOf('2px solid rgb(255,') > -1;
           });
         }, 10000, 'Style is not applied');
      });
  }

module.exports = {
    highlightElement
};
