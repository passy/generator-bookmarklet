# Bookmarklet Generator for Yeoman
[![Build Status](https://secure.travis-ci.org/passy/generator-bookmarklet.png?branch=master)](https://travis-ci.org/passy/generator-bookmarklet)

Scaffolds out a project to create
[Bookmarklets](http://en.wikipedia.org/wiki/Bookmarklet).

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-bookmarklet`
- Run: `yo bookmarklet`

Now add or edit your files in `app/` and run `gulp` to generate your
bookmarklet. You can also use `gulp watch` to continuously watch for changes.
You can find the resulting bookmarklet in `dist/bookmarklet.js`.

## Changelog

### 0.2.0 (2014-01-03)

- Replaced grunt with gulp.

### 0.1.1 (2013-05-01)

- Automatically install npm dependencies unless started with `--skip-install`.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License) |
(c) [Pascal Hartig](https://twitter.com/passy)
