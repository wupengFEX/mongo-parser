# mongo-parser

Since mongoose can't store some keywords, sucha as '$', '.' and so on, so mongo-parser's is aim at code conversion

## Basic

- node 6+

## Usage

`npm i mongo-parser`

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