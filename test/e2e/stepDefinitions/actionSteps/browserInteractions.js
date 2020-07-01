"use strict";

const { Then, When } = require('cucumber'),
	logger = require('../../config/loggerConfig.js').logger,
	factory = require('../../po/factory');

const commonPage = factory.getClassObject('common'),
	promoPage = factory.getClassObject('promoPage');

When(/^I open "([^"]*)" url$/, async (alias) => {
	try {
		logger.info(`I open ${alias} url`);
		await commonPage.visit(alias);
	} catch (error) {
		logger.error(`Error with step: 'I open ${alias} url' \n ${error}`);
		await commonPage.visit(alias);
	}
});

Then(/^I refresh promo page$/, async () => {
	try {
		logger.info(`I refresh promo page`);
		await promoPage.refresh();
	} catch (error) {
		logger.error(`Error with step: 'I refresh promo page' \n ${error}`);
		await promoPage.refresh();
	}
});
