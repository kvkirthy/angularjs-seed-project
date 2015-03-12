var path = require('path');
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },


    express: {
      options:{
        script: './server.js'
      },

      server: {
        options: {
          port: 3000,  
          bases: '.'        
        }
      }
    },

    html2js: {
      options: {
        // custom options, see below
      },
      main: {
        src: ['app/templates/*.html'],
        dest: 'app/js/templates.js'
      }
    },

    requirejs:{
      compile: {
          options: {
            baseUrl: "app/js",
            name: "app", 
            out: "dist/app.js",
            paths:{
            "ui-router":"empty:",
            "bootstrap":"empty:"
           }
          }
        }
    },

    clean: ['dist'],

    watch: {
      express: {
        files:  [ 'app/**/*.js' ],
        tasks:  [ 'express' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded 
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-clean');


  grunt.registerTask('default', ['clean','html2js','requirejs','express','express-keepalive']);

};