/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('Bookmarklet generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.webapp = helpers.createGenerator('bookmarklet:app', [
        '../../app'
      ]);
      this.webapp.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      ['package.json', /"name": "temp"/],
      '.gitignore',
      '.gitattributes',
      '.jshintrc',
      'Gruntfile.js',
      'app/main.js'
    ];

    this.webapp.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
