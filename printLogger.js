const { logger } = require('./logger');

// This is middleware function we can call it wherever we need logging in our program
exports.printLogger = function (type, message, moduleName) {
    switch(type) {
        case 0: logger.error(message);
        break;

        case 1: logger.warn(message);
        break;

        case 2: logger.info(message);
        break;

        case 3: logger.debug(message);
        break;
    }
}