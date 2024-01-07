# distribution-variants

NOT YET IMPLEMENTED

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

For example, Android's Gradle build system has two features that do this. They are called *build types* and *product flavors*.
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
    * I used Node v20.9.0
2. Install dependencies
    * ```shell
      npm install
      ```
3. Build all distribution variants of the program
    * ```shell
      npm run build
      ```
4. Run the "basic-logging" variant of the program
    * ```shell
      node dist/basic-logging/index.js
      ```
    * The output will have no colors or timestamps and look something like the following.
    * ```text
      Hello from the "basic-logging" variant of the program!
      ```
5. Run the "fancy-logging" variant of the program
    * ```shell
      node dist/fancy-logging/index.js
      ```
    * The output will have colors and timestamps and look something like the following.
    * ```text
      2024-01-01 00:12:00.000Z Hello from the "fancy-logging" variant of the program!
      ```
