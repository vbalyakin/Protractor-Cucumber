"use strict"

const CovidPage = require('./covidPage'),
  MainPage = require('./mainPage'),
  PageObjectElement = require('./utils/poe'),
  mixin = require('xmultiple');
const helperElement = new PageObjectElement();
let instance;

class PromoPage extends mixin(CovidPage, MainPage) {
  constructor() {
    super();
    this.url = helperElement.getUrlForVisit('promotions page');
    if (!instance) {
      instance = this;
    }
    return instance;
  }
}

instance = new PromoPage();

module.exports = PromoPage;
