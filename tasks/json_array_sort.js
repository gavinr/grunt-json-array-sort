/*
 * grunt-json-array-sort
 * https://github.com/gavinr/grunt-json-array-sort
 *
 * Copyright (c) 2016 Gavin Rehkemper
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // sorting functions from http://stackoverflow.com/a/4760279/2039
  var dynamicSort = function(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  };

  // sorting functions from http://stackoverflow.com/a/4760279/2039
  var dynamicSortMultiple = function(props) {
    return function (obj1, obj2) {
      var i = 0, result = 0, numberOfProperties = props.length;
      while(result === 0 && i < numberOfProperties) {
        result = dynamicSort(props[i])(obj1, obj2);
        i++;
      }
      return result;
    }
  }

  var sortFile = function(src, sortKeys) {
    var returnString = '';
    try {
      var json = JSON.parse(src);
      json.sort(dynamicSortMultiple(sortKeys));
      returnString = JSON.stringify(json, null, 2);
    } catch(e) {
      // error parsing file
      return false;
    }
    return returnString;
  }

  grunt.registerMultiTask('json_array_sort', 'Sorts an array of JSON objects, based on the key(s) you specify.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      src = sortFile(src, this.data.sortKeys);

      // Write the destination file.
      if (src) {
        grunt.file.write(f.dest, src);
        // Print a success message.
        grunt.log.writeln('File "' + f.dest + '" created.');
      } else {
        grunt.log.writeln('File "' + f.src + '" could not be parsed.');
      }

    }.bind(this));
  });

};
