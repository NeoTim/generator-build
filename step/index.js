'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  // yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.generateServer = function () {

    console.log(this.name)
    this.sourceRoot(path.join(__dirname, './templates/', this.name));
    ngUtil.processDirectory(this, '.', './client/app/states/steps/' + this.name);

};

module.exports = Generator;
