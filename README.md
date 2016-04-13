# to-length

> Converts value to an integer suitable for use as the length of an array-like object. 


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/to-length/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/to-length/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/to-length)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/to-length/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/to-length)


## Install

```
$ npm install --save to-length 
```

## Usage

> For more use-cases see the [tests](https://github.com/bubkoo/to-length/blob/master/test/spec/index.js)

```js
var toLength = require('to-length');

toLength(3);                // => 3
toLength('3');              // => 3
toLength('abc');            // => 0
toLength(-2);               // => 0
toLength();                 // => 0
toLength(null);             // => 0
toLength(Number.MIN_VALUE); // => 0
toLength(Number.MAX_VALUE); // => 4294967295
toLength(Infinity);         // => 4294967295

// boolean
toLength(true);  // => 1
toLength(false); // => 0
```

## Related

- [is-length](https://github.com/bubkoo/is-length) - Checks if the given value is a valid array-like length.
- [is-index](https://github.com/bubkoo/is-index) - Checks if the given value is a valid array-like index.
- [to-num](https://github.com/bubkoo/to-num) - Converts the given value to a number.
- [to-integer](https://github.com/bubkoo/to-integer) - Converts the given value to an integer.
- [to-str](https://github.com/bubkoo/to-str) - Converts the given value to a string.
- [to-lower](https://github.com/bubkoo/to-lower) - Converts string, as a whole, to lower case.
- [to-upper](https://github.com/bubkoo/to-upper) - Converts string, as a whole, to upper case.
- [to-path](https://github.com/bubkoo/to-path) - Converts value to a property path array. 
- [to-source-code](https://github.com/bubkoo/to-source-code.git) - Converts function to its source code.
- [upper-first](https://github.com/bubkoo/upper-first) - Converts the first character of string to upper case.
- [lower-first](https://github.com/bubkoo/lower-first) - Converts the first character of string to lower case.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/to-length/issues/new).
