![kodepos.js](https://i.ibb.co/4fSV6vV/kodepos-js.png)

[![kodepos.js](https://img.shields.io/npm/dm/kodepos.js)](https://www.npmjs.com/package/kodepos.js)

A simple Node.js module to search postal code (kode pos) in Indonesia.

### Installation

```shell
npm install --save kodepos.js
```

Use this module in server environment as it contain relatively large json dataset. If you want to use it on client side, make sure to use compression. Haven't test it though.

### Usage

#### kodepos.search()

```javascript
const kodepos = require("kodepos.js");

const query = "bandung";
const limit = 10;
const exact = false; // Should match query? if false, LIKE (similar in SQL) method is used.

const search = kodepos.search(query, limit, exact);
console.log(search);
```

#### kodepos.searchBy()

```javascript
const kodepos = require("kodepos.js");

const scope = "city"; // Check table below for available values
const query = "bandung";
const limit = 10;
const exact = true; // Should match query? if false, LIKE (similar in SQL) method is used.

const searchBy = kodepos.search(scope, query, limit, exact);
console.log(searchBy);
```

| Method     | Param | Type   | Required | Default | Description                         |
| ---------- | ----- | ------ | -------- | ------- | ----------------------------------- |
| search()   | query | String | True     | None    | The query of search operation       |
|            | limit | Number | False    | 10      | Results limit. Set 0 to return all  |
|            | exact | Bool   | False    | False   | Should search to match query?       |
| searchBy() | scope | String | True     | None    | province / city / urban / disctrict |
|            | query | String | True     | None    | The query of search operation       |
|            | limit | Number | False    | 10      | Results limit. Set 0 to return all  |
|            | exact | Bool   | False    | False   | Should search to match query?       |

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
