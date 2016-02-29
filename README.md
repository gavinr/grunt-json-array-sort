# grunt-json-array-sort [![Build Status](https://travis-ci.org/gavinr/grunt-json-array-sort.svg?branch=master)](https://travis-ci.org/gavinr/grunt-json-array-sort)

> Sorts an array of JSON objects, based on the key(s) you specify.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-array-sort --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-array-sort');
```

## The "json_array_sort" task

### Overview
In your project's Gruntfile, add a section named `json_array_sort` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json_array_sort: {
    your_target: {
      src: 'test/fixtures/1.js',
      dest: 'tmp/1.js',
      sortKeys: ['testprop']
    },
  },
});
```

### Options

#### sortKeys
Type: `Array`
Default value: ``

The array of properties that the JSON objects will be sorted by.

### Usage Examples

#### Default Options
In this example, we're sorting our JSON array by the 'state' key then 'city' key.

```js
grunt.initConfig({
  'json_array_sort': {
    dev: {
      src: 'src/city-flags.js',
      dest: 'src/city-flags.js',
      sortKeys: ['state', 'city'],
    }
  }
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 * 0.1.0 - initial version
