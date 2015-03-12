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
      server: {
        options: {
          port: 3000,          
        }
      }
    },

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

  grunt.registerTask('default', ['express','express-keepalive']);

};