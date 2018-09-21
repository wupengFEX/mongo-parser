# mongo-parser

![NPM Version](https://img.shields.io/npm/v/mongo-parser.svg?style=flat)
![Build Status](https://travis-ci.org/wupengFEX/mongo-parser.svg?branch=master)

Since mongoose can't store some keywords, sucha as `$`, `.` and so on, so mongo-parser's is aim at code conversion

## Basic

- node 6+

## Usage

`npm i mongo-parser --save`

## API

### `escape`

escape for object or string, for example

```
const msp = require('mongo-parser');
msp.escape(obj);
```

### `unescape`

escape for object or string, for example

```
const msp = require('mongo-parser');
msp.unescape(obj);
```

### License

[MIT](https://github.com/wupengFEX/mongo-parser/blob/master/LICENSE)
