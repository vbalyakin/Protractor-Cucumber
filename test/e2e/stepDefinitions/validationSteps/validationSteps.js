"use strict";

const { Then } = require('cucumber'),
	expect = require('chai').expect,
	logger = require('../../config/loggerConfig.js').logger,
	PageObjectElement = require('../../po/utils/poe'),
	highlightElement = require('../utils/stepFunctions').highlightElement,
	factory = require('../../po/factory');

const helperElement = new PageObjectElement(),
	promoPage = factory.getClassObject('promoPage');


Then(/^Section "([^"]*)" is visible$/, async (alias) => { 
	const highLightExpect = async () => {
		await highlightElement(alias);
		return expect(await helperElement.isVisible(alias)).to.be.equal(false); // change 'false' -> true
	};
	try {
		logger.info(`Section ${alias} is visible`);
		await highLightExpect();
	} catch (error) {
		logger.error(`Error with step: 'Section ${alias} is visible' \n ${error}`);
		await highLightExpect();
	}
});

Then(/^"([^"]*)" should be present$/, async (alias) => {
	const promotionsPageURL = promoPage.getPageUrl();
	const expectedResult = async () => {
		return expect(await promoPage.getCurrentUrl()).to.be.equal(promotionsPageURL);
	};
	try {
		logger.info(`${alias} should be present`);
		await promoPage.visit(alias);
		await expectedResult();
	} catch (error) {
		logger.error(`Error with step: '${alias} should be present' \n ${error}`);
		await expectedResult();
	}
});
