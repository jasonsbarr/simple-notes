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
    console.log(chalk.blue.bold(msg));
};

module.exports = {
    success,
    error,
    info,
};
