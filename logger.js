const { transports, createLogger, format } = require('winston');

// This format converts it's time to your locale machine/server time
let time = {format:'ddd DD-MMM-YY hh:mm:ss A'};
module.exports.logger = createLogger({
    transports: [
        // 0
        new transports.File({
            level: 'error',
            filename: 'log_files/errors/error.log',
            json: true,
            format: format.combine(format.timestamp(time), format.json(), format.prettyPrint())
        }),

        // 1
        new transports.File({
            level: 'warn',
            filename: `log_files/warn/warn.log`,
            json: true,
            format: format.combine(format.timestamp(time), format.json(), format.prettyPrint())
        }),

        // 2
        new transports.File({
            level: 'info',
            filename: `log_files/info/info.log`,
            json: true,
            format: format.combine(format.timestamp(time), format.json(), format.prettyPrint())
        }),

        // 3
        new transports.File({
            level: 'debug',
            filename: `log_files/debug/debug.log`,
            json: true,
            format: format.combine(format.timestamp(time), format.json(), format.prettyPrint())
        })
    ]
})