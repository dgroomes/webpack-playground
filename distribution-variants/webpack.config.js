const path = require("path");
const webpack = require("webpack");
const { DefinePlugin } = webpack;

/**
 * Generates a webpack configuration for a specific variant. The configuration defines a 'logging' alias which means that
 * when a file has `require("logging")` then the actual code that gets used will be the variant-specific JavaScript file
 * (e.g. "fancy-logging.js" or "basic-logging.js"). The variant name is also compile-time-replaced into the bundled
 * JavaScript thanks to the DefinePlugin. It replaces any references to the global variable 'DISTRIBUTION_VARIANT' with
 * the literal string value of the variant name (e.g. "fancy-logging" or "basic-logging").
 *
 * @param {string} distributionVariant - The name of the variant. This will be used to name the output directory.
 * @param {string} loggingJsFile - The name of the JavaScript file that contains the 'log' function. This will be used
 * to resolve the 'logging' alias.
 */
function createVariantConfig(distributionVariant, loggingJsFile) {
  return {
    name: distributionVariant,
    mode: "production",
    devtool: false, // We don't need source maps because we're not minifying the code. It's legible.
    entry: "./src/main.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist", distributionVariant),
    },
    optimization: {
      minimize: false, // Don't minify the code. Read the actual bundled code to fully grok what's going on.
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
    plugins: [
      new DefinePlugin({
        DISTRIBUTION_VARIANT: JSON.stringify(distributionVariant),
      }),
    ],
    resolve: {
      alias: {
        logging$: path.resolve(__dirname, "src", loggingJsFile),
      },
    },
  };
}

module.exports = [
  createVariantConfig("basic-logging", "basic-logging.js"),
  createVariantConfig("fancy-logging", "fancy-logging.js"),
];
