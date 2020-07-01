"use strict";

const { When } = require('cucumber'),
	expect = require('chai').expect,
	logger = require('../../config/loggerConfig.js').logger,
	PageObjectElement = require('../../po/utils/poe'),
	highlightElement = require('../utils/stepFunctions').highlightElement,
	factory = require('../../po/factory');

const helperElement = new PageObjectElement(),
	commonPage = factory.getClassObject('common'),
	promoPage = factory.getClassObject('promoPage');

When(/^I click on "([^"]*)" button$/, async (alias) => {
	const highLightClick = async () => {
		await highlightElement(alias);
		await commonPage.buttonClick(alias);
	};
	try {
		logger.info(`I click on ${alias} button`);
		await highLightClick();
	} catch (error) {
		logger.error(`Error with step: 'Section ${alias} is visible' \n ${error}`);
		await highLightClick();
	}
});

When(/^I move mouse to "([^"]*)" button$/, async (alias) => {
	const highLightMoveExpect = async () => {
		await highlightElement(alias);
		return expect(await helperElement.isVisible(alias)).to.be.equal(true);
	};
	try {
		logger.info(`I move mouse to ${alias} button`);
		helperElement.mousePerform(alias);
		await highLightMoveExpect();
	} catch (error) {
		logger.error(`Error with step: 'I move mouse to ${alias} button' \n ${error}`);
		await highLightMoveExpect();
	}
});

When(/^I scroll to the "([^"]*)" of current page$/, async (alias) => {
	try {
		logger.info(`I scroll to the ${alias} of current page`);
		await promoPage.scrollPage(alias);
	} catch (error) {
		logger.error(`Error with step: 'I scroll to the ${alias} of current page' \n ${error}`);
		await highlightElement(alias);
	}
});
