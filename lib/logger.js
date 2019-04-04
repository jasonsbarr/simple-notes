const chalk = require('chalk');

const success = function(msg) {
    console.log(
        chalk.green.inverse(`Success:`),
        chalk.green.bold.underline(msg)
    );
};

const error = function(msg) {
    console.error(
        chalk.red.inverse(`Error:`),
        chalk.red.bold.underline(msg)
    );
};

const info = function(msg) {
    console.log(
        chalk.blue.inverse(`Info:`),
        chalk.blue.bold.underline(msg)
    );
};

module.exports = {
    success,
    error,
    info,
};
