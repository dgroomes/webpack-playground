# webpack-playground

📚 Learning and exploring webpack.

> At its core, webpack is a static module bundler for modern JavaScript applications.
>
> -- <cite>https://webpack.js.org/concepts</cite>


## Overview

Webpack (stylized as "webpack" but capitalized when used to start a sentence) has steadily grown over the years since
its inception in 2012 to become an extensive "software building machine" for web-based projects. As such, I would
like to create working examples of webpack-based projects.

**NOTE**: This project was developed on macOS. It is designed for my own personal use.


## Standalone subprojects

This repository illustrates different concepts, patterns and examples via standalone subprojects. Each subproject is
completely independent of the others and do not depend on the root project. This _standalone subproject constraint_
forces the subprojects to be complete and maximizes the reader's chances of successfully running, understanding, and
re-using the code.

The subprojects include:


## `typescript-web/`

A webpack-based project that builds a TypeScript program for the web.

See the README in [typescript-web/](typescript-web/). 


## `distribution-variants/`

Build a project into multiple distribution variants like "development", "production", "freemium", "premium", etc.
