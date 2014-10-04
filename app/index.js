'use strict';
var fs = require('fs');
var path = require('path');
var util = require('util');
var genUtils = require('../util.js');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var wiredep = require('wiredep');




var AngularFullstackGenerator = yeoman.generators.Base.extend({

  init: function () {
    this.argument('name', { type: String, required: false });
    this.appname = this.name || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));

    this.option('app-suffix', {
      desc: 'Allow a custom suffix to be added to the module name',
      type: String,
      required: 'false'
    });
    this.scriptAppName = this.appname + genUtils.appName(this);
    this.appPath = this.env.options.appPath;
    this.serverPath = this.env.options.appPath + '/servers';
    this.pkg = require('../package.json');

    this.filters = {};
  },

  info: function () {
    this.log(this.yeoman);
    this.log('Let\'s build a fullstack application');
  },

  checkForConfig: function() {
    var cb = this.async();

    if(this.config.get('filters')) {
      this.prompt([{
        type: "confirm",
        name: "skipConfig",
        message: "Existing .yo-rc configuration found, would you like to use it?",
        default: true,
      }], function (answers) {
        this.skipConfig = answers.skipConfig;

        // NOTE: temp(?) fix for #403
        if(typeof this.oauth==='undefined') {
          var strategies = Object.keys(this.filters).filter(function(key) {
            return key.match(/Auth$/) && key;
          });

          if(strategies.length) this.config.set('oauth', true);
        }

        cb();
      }.bind(this));
    } else {
      cb();
    }
  },

  clientPrompts: function() {
    if(this.skipConfig) return;
    var cb = this.async();

    this.log('# Client\n');

    this.prompt([{
        type: "list",
        name: "level",
        message: "Where would you like to start?",
        choices: ["beginner", "guide", "basic"],
        filter: function( val ) {
          var filterMap = {
            'beginner': 'beginner',
            'guide': 'guide',
            'basic': 'basic'
          };

          return filterMap[val];
        }
      },{
        type: "confirm",
        name: "server",
        message: "Would you like to start off with a server?"
      }, {
        type: "confirm",
        name: "builder",
        message: "Would you like to start off with a gulpfile?",
        when: function (answers) {
          return answers.builder;
        }
      }], function (answers) {
        this.filters[answers.level] = true;
        this.filters.builder =  !!answers.builder;
      cb();
      }.bind(this));
  },


  saveSettings: function() {
    if(this.skipConfig) return;
    this.config.set('beginner_dir', './templates/beginner')
    this.config.set('basic_dir', './templates/basic')
    this.config.set('insertRoutes', true);
    this.config.set('registerRoutesFile', 'server/routes.js');
    this.config.set('routesNeedle', '// Insert routes below');
    this.config.set('routesBase', '/api/');
    this.config.set('pluralizeRoutes', true);
    this.config.set('filters', this.filters);
    this.config.forceSave();
  },

  generate: function() {
    // if(this.config.get('filters').sass) this.copy('../../bootstrap-sass', './client/app/styles/bootstrap')

    if (this.filters.beginner){
      this.sourceRoot(path.join( __dirname, this.config.get('beginner_dir') ) );
    } else if(this.filters.basic) {
      this.sourceRoot(path.join( __dirname, this.config.get('basic_dir') ) );
    } else {
      this.sourceRoot(path.join( __dirname, './templates'));
    }

    genUtils.processDirectory(this, '.', '.');
  },

  end: function() {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});

module.exports = AngularFullstackGenerator;
