"use strict"

const CommonPage = require('./common'),
    PageObjectElement = require('./utils/poe'),
    helperElement = new PageObjectElement();


class CovidPage extends CommonPage {
    constructor() {
        super();
        this.url = helperElement.getUrlForVisit('covid page');
    }
    refresh() {
        return browser.navigate().refresh();
    }
}

module.exports = CovidPage;
