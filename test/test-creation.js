/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;


describe('Bookmarklet generator', function () {
  beforeEach(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates expected files', function () {
    var expected = [
      'package.json',
      '.gitignore',
      '.gitattributes',
      '.jshintrc',
      'gulpfile.js',
      'app/main.js'
    ];

    assert.file(expected);
  });
});
