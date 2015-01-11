'use strict';

var path = require('path'),
    yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function constructor() {
    yeoman.generators.Base.apply(this, arguments);

    this.mainFile = this.readFileAsString(
      path.join(this.sourceRoot(), 'main.js'));
    this.pkg = JSON.parse(
      this.readFileAsString(path.join(__dirname, '../package.json')));
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  buildfile: function buildfile() {
    this.template('gulpfile.js');
  },

  packagejson: function packagejson() {
    this.template('_package.json', 'package.json');
  },

  jshintrc: function jshintrc() {
    this.template('jshintrc', '.jshintrc');
  },

  gitfiles: function gitfiles() {
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
  },

  app: function app() {
    this.mkdir('app');
    this.write('app/main.js', this.mainFile);
  }
});
