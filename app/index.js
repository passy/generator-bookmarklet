'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

function BookmarkletGenerator() {
  yeoman.generators.Base.apply(this, arguments);

  this.mainFile = this.readFileAsString(path.join(this.sourceRoot(),
                                                  'main.js'));
  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname,
                                                        '../package.json')));

  this.on('end', function () {
    console.log('\nI\'m all done. Just run ' +
                'npm install && bower install'.bold.yellow +
                ' to install the required dependencies.');
  });
};

util.inherits(BookmarkletGenerator, yeoman.generators.NamedBase);

BookmarkletGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

BookmarkletGenerator.prototype.packagejson = function packagejson() {
  this.template('_package.json', 'package.json');
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
