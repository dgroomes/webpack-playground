# typescript-web

A webpack-based project that builds a TypeScript program for the web.


## Overview

While we can sometimes get away with authoring HTML, CSS and JavaScript and serving those exactly as-is to the browser,
we often reach for more sophisticated tools in our web projects. An intermediate frontend web project might include, for
example, TypeScript, JSX, Tailwind, etc. The project needs a build process to turn these things into the languages that
the browser can actually understand: HTML, CSS, and JavaScript. This project is designed as a runnable example, complete
with verbose commentary, of an intermediate webpack project authored in TypeScript.

I originally wrote this subproject in my repository, <https://github.com/dgroomes/javascript-playground/tree/main/webpack>
but I moved it to this webpack-specific repository. 


## Instructions

Follow these instructions to build and run the project.

1. Pre-requisite: Node.js
    * I used Node v20.9.0
2. Install dependencies
   * ```shell
     npm install
     ```
3. Build the project:
   * ```shell
     npm run build
     ```
4. Alternatively, build the project continuously and serve the output:
   * ```shell
     npm start
     ```
   * The project is ready to be viewed in the browser! Open <http://[::1]:8080>.


## Webpack Philosophy and the Effect on CSS

My understanding of webpack's philosophy is "bake stuff into JavaScript files when possible". The most famous example of
this is webpack's support for CSS. Webpack takes the "CSS-in-JS" route, where the application's CSS styles are
actually embedded into `.js` files which means that the application loads CSS styles via JavaScript and not via the
classic (traditional? idiomatic?) pattern of loading CSS via `<link rel="stylesheet"...>` tags or `<style...>` tags.

Webpack's extensive user guide (much appreciated, great work on the guides!) describes the pattern for loading CSS in
under the [Asset Management sub-guide](https://webpack.js.org/guides/asset-management/#loading-css).


## Dependencies

Normally, I like to provide in-line comments in my project's dependency manifest file that describe where to find the
latest release information for the given library. For example, for Java projects built with [Gradle](https://gradle.org/),
the manifest file name is `build.gradle.kts`. The `.kts` file type is a Kotlin *script* file. I'll have lines like the
following:

```kotlin
val slf4jVersion = "2.0.10" // SLF4J releases: http://www.slf4j.org/news.html
val httpComponentsV5Version = "5.2.4" // HttpComponents v5 releases: https://hc.apache.org/news.html
val wireMockVersion = "3.3.1" // WireMock releases: https://github.com/tomakehurst/wiremock/tags
val http4kVersion = "5.12.1.0" // http4K releases: https://github.com/http4k/http4k/releases
```

This makes it easy for me to quickly research the latest releases for a library and make an informed decision about
whether I should I upgrade or not.

For Node projects, we don't have the same luxury because `package.json` files don't support comments. Rather, JSON itself
does not support comments. So, I'll use this section to link to the release pages of each library that's included as a
dependency.

| Library                             | Latest releases                                                                        |
|-------------------------------------|----------------------------------------------------------------------------------------|
| lodash (a JavaScript library)       | <https://github.com/lodash/lodash/tags>                                                |
| @types/lodash (via DefinitelyTyped) | <https://www.npmjs.com/package/@types/lodash?activeTab=versions>                       |
| RxJS (a TypeScript library)         | <https://github.com/ReactiveX/rxjs/blob/7.x/CHANGELOG.md>                              |
| CSS Loader                          | <https://github.com/webpack-contrib/css-loader/releases>                               |
| HTML webpack Plugin                 | <https://github.com/jantimon/html-webpack-plugin/blob/main/CHANGELOG.md>               |
| Style Loader                        | <https://github.com/webpack-contrib/style-loader/blob/master/CHANGELOG.md>             |
| ts-loader                           | <https://github.com/TypeStrong/ts-loader/blob/main/CHANGELOG.md>                       |
| TypeScript                          | <https://github.com/Microsoft/TypeScript/releases>                                     |
| webpack                             | <https://github.com/webpack/webpack/releases>                                          |
| webpack CLI                         | <https://github.com/webpack/webpack-cli/blob/master/packages/webpack-cli/CHANGELOG.md> |
| webpack-dev-server                  | <https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md>               |

npm does have a neat feature to show the latest version of a library. It's the `npm view <package>` command. It shows
some metadata about a library (well, "package") like the latest version and it's source code link (usually GitHub, of course). 

For example, `npm view lodash` shows:

```text
lodash@4.17.21 | MIT | deps: none | versions: 114
Lodash modular utilities.
https://lodash.com/

keywords: modules, stdlib, util

dist
.tarball: https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz
.shasum: 679591c564c3bffaae8454cf0b3df370c3d6911c
.integrity: sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg==
.unpackedSize: 1.4 MB

maintainers:
- mathias <mathias@qiwi.be>
- jdalton <john.david.dalton@gmail.com>
- bnjmnt4n <benjamin@dev.ofcr.se>

dist-tags:
latest: 4.17.21

published a year ago by bnjmnt4n <benjamin@dev.ofcr.se>
```


## Wish List

General clean-ups, ITEMs and things I wish to implement for this project:

* [x] DONE Bug. The source `index.html` file is not actually used.
* [x] DONE Add CSS. Make sure to use the idiomatic webpack way. 
* [x] DONE (migrated from <https://github.com/dgroomes/javascript-playground/tree/main/webpack>) Promote this project to its own playground-style repository because webpack is a big topic and it's also not even
  a JavaScript-specific topic. I need a place to put runnable and well-explained webpack examples because I use it a lot,
  and it's complicated and I need working references.
* [x] DONE Upgrade deps
* [ ] The "re-exporting TypeScript definition" is more like a TypeScript example. That should probably be moved to
  a subproject in <https://github.com/dgroomes/typescript-playground>.


## Reference 

* [webpack guide for TypeScript](https://webpack.js.org/guides/typescript/)
  * Most of this example project is based on the excellent webpack guides.
