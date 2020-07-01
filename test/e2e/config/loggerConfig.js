const log4js = require('log4js');

log4js.configure({
    appenders: {
        writer: {
            type: 'file',
            filename: 'combined.log',
            layout: {
                type: 'pattern',
                pattern: '[%d{dd/MM/yyyy-hh.mm.ss.SSS}] - [%p] - %c - %m',
            }
        },
        writerInfo: {
            type: 'logLevelFilter',
            appender: 'writer',
            level: 'info',
            maxLevel: 'info'
        },
        console: {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '%[[%d{dd/MM/yyyy-hh.mm.ss.SSS}] - [%p] - %c - %m%]',
            }
        },
        error: {
            type: 'file',
            filename: 'errors.log',
            layout: {
                type: 'pattern',
                pattern: '[%d{dd/MM/yyyy-hh.mm.ss.SSS}] - [%p] - %c - %m',
            }
        },
        errorInfo: {
            type: 'logLevelFilter',
            appender: 'error',
            level: 'error',
            maxLevel: 'error'
        },
        out: {
            type: 'stdout',
            layout: {
                type: 'pattern',
                pattern: '%[[ %d{dd/MM/yyyy - hh.mm.ss.SSS} ] - [ %p ] - %c - %m%] %n',
            }
        }
    },
    categories: {
        writer: {
            appenders: ['writerInfo'],
            level: 'info'
        },
        consoller: {
            appenders: ['console'],
            level: 'info'
        },
        error: {
            appenders: ['error', 'errorInfo'],
            level: 'error'
        },
        creator: {
            appenders: ['out'],
            level: 'info'
        },
        default: {
            appenders: ['writerInfo', 'console'],
            level: 'info'
        },
        result: {
            appenders: ['writerInfo', 'errorInfo'],
            level: 'debug'
        }
    }
});

const logger = log4js.getLogger('result');

module.exports = {
    logger
};
