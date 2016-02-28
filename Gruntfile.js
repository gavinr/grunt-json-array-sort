/*
 * grunt-json-array-sort
 * https://github.com/gavinr/grunt-json-array-sort
 *
 * Copyright (c) 2016 Gavin Rehkemper
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    json_array_sort: {
      1: {
        src: 'test/fixtures/1.js',
        dest: 'tmp/1.js',
        sortKeys: ['testprop'],
      },
      2: {
        src: 'test/fixtures/2.js',
        dest: 'tmp/2.js',
        sortKeys: ['testprop'],
      },
      3: {
        src: 'test/fixtures/3.js',
        dest: 'tmp/3.js',
        sortKeys: ['propa', 'propb'],
      },
      4: {
        src: 'test/fixtures/4.js',
        dest: 'tmp/4.js',
        sortKeys: ['propa', 'propb', 'propc'],
      },
      5: {
        src: 'test/fixtures/5.js',
        dest: 'tmp/5.js',
        sortKeys: ['propa', 'propb', 'propc'],
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'json_array_sort', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
