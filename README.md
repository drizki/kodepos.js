![kodepos.js](https://i.ibb.co/4fSV6vV/kodepos-js.png)

A simple Node.js module to search postal code (kode pos) in Indonesia.

### Installation

```shell
npm install --save kodepos.js
```

Use this module in server environment as it contain relatively large json dataset. If you want to use it on client side, make sure to use compression. Haven't test it though.

### Usage

```javascript
const kodepos = require("kodepos.js");

const search = kodepos.search("bandung", 100);
console.log(search);
```

| Method | Param | Type   | Required | Default |
| ------ | ----- | ------ | -------- | ------- |
| search | query | String | True     | None    |
|        | limit | Number | False    | 10      |

### Returns

```javascript
{
  count: Number,
  results: Array
}
```

### Test

Clone this repository and run:

```shell
npm test
```
