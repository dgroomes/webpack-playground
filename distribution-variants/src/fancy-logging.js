const chalk = require("chalk");
chalk.level = 2;

/**
 * Logs a message to the console with a timestamp and with color.
 *
 * For example, `log('Hello, world!')` will output something like:
 *     2024-01-01T12:00:00.000Z Hello, world!
 */
function log(...messages) {
  const timestamp = new Date().toISOString();
  const messagesInColor = messages.map((msg) => chalk.blue(msg));
  console.log(chalk.green(timestamp), ...messagesInColor);
}

module.exports = { log };
