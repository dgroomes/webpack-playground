# distribution-variants

Use webpack to build a project into multiple distribution variants like "development", "production", "freemium", "premium", etc.


## Overview

What happens when we need the "development" build of our web application to have different characteristics than our
"production" build? For example, consider a project that has the following requirements:

* The dev build should not be minified (JS/CSS) but the prod build should be minified
* The dev build should have "eval" source maps but the prod build should have regular source maps
* The dev build should not include a telemetry integration but the prod build should

While development vs. production is the familiar dichotomy, we might need to support our software using different
configurations for even more use-cases. Consider these use-cases, constraints and environments:

* a web app running locally for your development workflow, and with live reloading
* a web app deployed in a testing environment used by engineers and QA
* a web app deployed in a stage/UAT environment used by business partners
* a web app installed as a native app on Android/iOS via React Native
* a web app distributed with Electron and built for macOS
* a web app distributed with Tauri and built for Windows
* a website that is compatible with Internet Explorer 11
* a web app deployed in a public cloud
* a web app deployed in an air-gapped environment in a customer's datacenter
* a web app that has ads and is free to use for all
* a web app that has no ads, premium features, and requires a paid subscription
* etc.

We can often satisfy these different use-cases and environments by using runtime flags that direct the user experience
through different code paths, and using configuration files (`.json`, `.yaml`, .`xml`) to have environment-specific values
like hostnames, database names, caching time-to-live, etc. But sometimes the desired difference is more sophisticated or
the constraint is extreme. In these cases, we can "push left" and bake these differences in at build-time by building our
software into physically different *distribution variants*. Each variant can be hard coded with certain values, can be
bundled with different optional third-party dependencies, can be optimized with a special optimizing compiler, etc. 

For example, Android's Gradle-based build system has two features that do this. They are called *build types* and *product flavors*.
Read about these concepts in the Android Developer's documentation page [*Configure build variants*](https://developer.android.com/build/build-variants).
This ability is especially important for Android because of the wide variety of devices that run Android and the prevalence
of the freemium business model where an app is sometimes distributed with a free version and a paid version. We can
accomplish the same effect for web projects when we use webpack.

This project demonstrates how to build a project into multiple distribution variants using webpack features like the [DefinePlugin](https://webpack.js.org/plugins/define-plugin/)
and [*resolve*](https://webpack.js.org/configuration/resolve/) options. Specifically, we'll build a command-line Node.js program that has a "basic-logging" variant
and a "fancy-logging" variant. The "basic-logging" variant prints messages using `console.log()`. The "fancy-logging" prints
fancily formatted messages using the open source library [Chalk](https://github.com/chalk/chalk). The "basic-logging"
distribution has zero third-party dependencies. This is a desirable property for some constraints. By contrast, the
"fancy-logging" distribution depends on Chalk but comes with the benefit of more information-rich logging. It's a trade-off.
Users and operators have the freedom to choose which distribution variant they want to use.


## Instructions

Follow these instructions to build and run the different distribution variants of the program.

1. Pre-requisite: Node.js
    * I used Node v20.17.0
2. Install dependencies
    * ```shell
      npm install
      ```
3. Build all distribution variants of the program
    * ```shell
      npm run build
      ```
    * Study the console output of webpack. It shows that the "basic-logging" variant distribution is much smaller (1.82 KiB)
      compared to the "fancy-logging" distribution (43.8 KiB). That's the difference that including or omitting the
      Chalk dependency (and its transitive dependencies) makes.
    * ```text
      $ npm run build
      
      > webpack-playground_distribution-variants@1.0.0 build
      > webpack
      
      basic-logging:
        asset bundle.js 1.82 KiB [emitted] (name: main)
        ./src/main.js 157 bytes [built] [code generated]
        ./src/basic-logging.js 377 bytes [built] [code generated]
        basic-logging (webpack 5.89.0) compiled successfully in 272 ms
      
      fancy-logging:
        asset bundle.js 43.8 KiB [emitted] (name: main)
        runtime modules 123 bytes 1 module
        modules by path ./node_modules/ 39.4 KiB
          modules by path ./node_modules/chalk/source/*.js 10.2 KiB
            ./node_modules/chalk/source/index.js 5.93 KiB [built] [code generated]
            + 2 modules
          modules by path ./node_modules/color-convert/*.js 20.5 KiB
            ./node_modules/color-convert/index.js 1.67 KiB [built] [code generated]
            ./node_modules/color-convert/conversions.js 16.6 KiB [built] [code generated]
            ./node_modules/color-convert/route.js 2.2 KiB [built] [code generated]
          ./node_modules/ansi-styles/index.js 4.04 KiB [built] [code generated]
          ./node_modules/supports-color/browser.js 67 bytes [built] [code generated]
          ./node_modules/color-name/index.js 4.51 KiB [built] [code generated]
        modules by path ./src/*.js 1.99 KiB
          ./src/main.js 157 bytes [built] [code generated]
          ./src/fancy-logging.js 1.84 KiB [built] [code generated]
        fancy-logging (webpack 5.89.0) compiled successfully in 313 ms
      ```
4. Run the "basic-logging" variant of the program
    * ```shell
      node dist/basic-logging/bundle.js
      ```
    * The output will have no colors or timestamps and look something like the following.
    * ```text
      Hello from the 'basic-logging' distribution variant of the program!
      ```
5. Run the "fancy-logging" variant of the program
    * ```shell
      node dist/fancy-logging/bundle.js
      ```
    * The output will have colors and timestamps and look something like the following.
    * ```text
      2024-01-01T12:00:00.123Z Hello from the "fancy-logging" distribution variant of the program!
      ```


## Wish List

General clean-ups, todos and things I wish to implement for this project:

* [ ] Why did I use babel? I vaguely remember that I think this was what I wanted. Just trying to remember why I went
  for it and also why I went with CommonJS. UPDATE: oh yes Chalk 5.x is ESM only and I purposely stayed on 4.x. But did
  I do that because I can't do the `require`/module-resolution trick in ESM?
