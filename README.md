# p-csv-parser

[![Build Status](https://travis-ci.org/sydev/p-csv-parser.svg?branch=master)](https://travis-ci.org/sydev/p-csv-parser)

A simple and blazing fast csv parser, promisified.

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [Changelog](#changelog)


## Installation

```
$ npm install --save p-csv-parser
```

Or if you prefer yarn:

```
$ yarn add p-csv-parser
```

## Usage

```JavaScript
const csvParser = require('p-csv-parser');

csvParser(csvString)
  .then(results => console.log(results)); // Array of rows as objects

```

## API

### csvParser(csvString, options)

- ```csvString``` String (required) - The csv content to parse
- ```options``` Object (optional)
  - ```headers``` Boolean|Array - If true, the first line of ```csvString``` is parsed as headers, else use the array. Default: ```true```
  - ```delimiter``` String - Set the field delimiter, Default: ```","```


## Development

```
$ npm test
```

## Changelog

- 1.0.1
  - Fix module error
- 1.0.0
  - Initial Release
