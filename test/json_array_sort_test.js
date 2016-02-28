'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.json_array_sort = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  1: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/1.js');
    var expected = grunt.file.read('test/expected/1.js');
    test.equal(actual, expected, 'only a signle item. Should copy over.');

    test.done();
  },
  2: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/2.js');
    var expected = grunt.file.read('test/expected/2.js');
    test.equal(actual, expected, 'Basic sorting - one property');

    test.done();
  },
  3: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/3.js');
    var expected = grunt.file.read('test/expected/3.js');
    test.equal(actual, expected, 'two property sorting');

    test.done();
  },
  4: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/4.js');
    var expected = grunt.file.read('test/expected/4.js');
    test.equal(actual, expected, 'three property sorting - not all objects have third property');

    test.done();
  },
  5: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/5.js');
    var expected = grunt.file.read('test/expected/5.js');
    test.equal(actual, expected, 'three property sorting - all objects have third property');

    test.done();
  }
};
