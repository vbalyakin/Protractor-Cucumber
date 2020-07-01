"use strict";
const path = require('path'),
    yargs = require('yargs').argv,
    logger = require('./loggerConfig.js').logger;

exports.config = {
    allScriptsTimeout: 200000,
    getPageTimeout: 200000,
    specs: [path.resolve('./test/e2e/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: yargs.browser || 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        chromeOptions: {
            args: ['--no-sandbox']
        },
        metadata: {
            device: 'HP ProBook 6570b',
            platform: {
                name: 'Windows',
                version: '8.1 build 9600'
            }
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('./test/e2e/stepDefinitions/**/*.js')],
        ignoreUncaughtExceptions: true,
        format: ['json:.tmp/results.json', './node_modules/cucumber-pretty'],
        strict: true,
        tags: yargs.tag || '@westernShop'
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true
        }
    }],
    onPrepare: () => {
        logger.info('Maximizing browser window');
        browser.ignoreSynchronization = true;
        return browser.manage().window().maximize();
    }
};
