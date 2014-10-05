'use strict';
// var fs = require('fs')
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');
var map = require('map-stream');
var fs = require('vinyl-fs');
var dir = require('node-dir');
var inject = require('gulp-inject')
var  glob = require('glob')

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
  // yeoman.generators.Base.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);



Generator.prototype.generateFiles = function () {
  // this.sourceRoot(path.join(__dirname, './templates/', this.name));
  // ngUtil.processDirectory(this, '.', './client/app/states/setup/' + this.name);
    this.indexFile = this.engine(this.dest.read('client/index.html'), this);

}
Generator.prototype.generateServer = function () {

    // this.indexFile = this.readFileAsString(path.join(this.env.cwd, '/client/', 'index.html'));
    // this.scriptArray = [];

    var self = this;
    // var client = path.join(this.env.cwd, './client/app')


    glob(path.join(this.env.cwd, '/client/app/**/*.js'), function (er, files) {
      // files is an array of filenames.
      // self.scriptArray = files;
      // self.indexFile = self.appendScripts(self.indexFile, 'client/app/app.js', files, {}, client);
      // console.log(self.indexFile)


      self.indexFile = self.appendFiles({
        html: self.indexFile,
        fileType: 'js',
        optimizedPath: 'client/app.js',
        sourceFileList: files,
        searchPath: 'client/app.js',
      });
      console.log(self.indexFile)

      // self.src.copy(self.indexFile, './client/index.html')

      // If the `nonull` option is set, and nothing
      // was found, then files is ["**/*.js"]
      // er is an error object or null.
    })

    // fs.src(this.env.cwd + '/client/app/**/*.js', {read:false})
    // scripts
    //   .pipe(map(injector))
    //   .pipe(fs.dest(this.env.cwd + '/client/app'));
    // this.indexFile = this.appendFiles({
    //   html: this.indexFile,
    //   fileType: 'js',
    //   optimizedPath: './client/app/states/setup/' + this.name + '/' + this.name +'.js',
    //   sourceFileList: ['./client/app/states/setup/' + this.name + '/' + this.name +'.js', './client/app/states/setup/' + this.name + '/' + this.name +'.controller.js'],
    //   searchPath: './client/app/states/setup/' + this.name
    // });

    // console.log(this.dest.read())

// this.appendScripts(this.dest, optimizedPath, sourceFileList, attrs, searchPath)

};
Generator.prototype.injectFiles = function () {

  // this.dest.write('./client/index.html', this.indexFile)
}

module.exports = Generator;
