/*global describe, beforeEach, it*/

'use strict';

var helpers = require('yeoman-generator').test;
var assert  = require('assert');

describe('Bookmarklet generator', function () {
  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });
});
