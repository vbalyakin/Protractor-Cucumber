"use strict"

const CommonPage = require('./common'),
  MainPage = require('./mainPage'),
  PromoPage = require('./promoPage'),
  CovidPage = require('./covidPage');


class Factory {
  getClassObject(page) {
    const obj = {
      common: new CommonPage(),
      mainPage: new MainPage(),
      promoPage: new PromoPage(),
      covidPage: new CovidPage()
    };
    return obj[page];
  }
}

module.exports = new Factory();
