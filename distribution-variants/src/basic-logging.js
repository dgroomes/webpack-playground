/**
 * This log function just delegates to "console.log". The reason we don't just inline "console.log" in the calling code
 * is so that we can swap out the implementation of "log" for other distribution variants like the "fancy-logging"
 * variant.
 */
function log(...messages) {
  console.log(...messages);
}

module.exports = { log };
