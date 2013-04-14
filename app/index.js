'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

function BookmarkletGenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  this.mainFile = this.readFileAsString(path.join(this.sourceRoot(),
                                                  'main.js'));
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname,
                                                        '../package.json')));

  this.on('end', function () {
    if (!options['skip-install']) {
      this.npmInstall();
    }
  });
}

util.inherits(BookmarkletGenerator, yeoman.generators.NamedBase);

BookmarkletGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

BookmarkletGenerator.prototype.packagejson = function packagejson() {
  this.template('_package.json', 'package.json');
};

BookmarkletGenerator.prototype.jshintrc = function jshintrc() {
  this.template('jshintrc', '.jshintrc');
};

BookmarkletGenerator.prototype.gitfiles = function gitfiles() {
  this.copy('gitattributes', '.gitattributes');
  this.copy('gitignore', '.gitignore');
};

BookmarkletGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.write('app/main.js', this.mainFile);
};

module.exports = BookmarkletGenerator;
