const j = require("jenis");
const json = require("./kodepos.json");

module.exports = {
  data: JSON.parse(JSON.stringify(json)),

  /**
   * Search the database using query and return object
   * with its total count and matching elements.
   * @param {String} query
   * @param {Number} limit
   * @return {Object}
   */
  search(query, limit = 10) {
    // 1. Validate input
    if (j.not.string(query))
      throw new TypeError("Param query must be a string");
    if (j.not.number(limit))
      throw new TypeError("Param limit must be a number");

    // 2. Define variables
    let results = { count: 0, results: [] };
    let pool = [];
    query = query.toString().toLowerCase();

    // 3. Do the search
    this.data.forEach((o) => {
      for (let k in o) {
        if (!o.hasOwnProperty(k) || !o[k]) continue;
        if (o[k].toString().toLowerCase().indexOf(query) !== -1) pool.push(o);
      }
    });

    // 4. Set results
    results.count = pool.length;
    if (limit == 0) {
      results.results = pool;
    } else {
      pool.length > limit
        ? (results.results = pool.slice(0, limit))
        : (results.results = pool);
    }

    // 5. Return results
    return results;
  },

  searchBy(scope, query, limit = 10) {
    if (j.not.string(query))
      throw new TypeError("Param query must be a string");
    if (j.not.string(scope))
      throw new TypeError("Param query must be a string");
    if (j.not.number(limit))
      throw new TypeError("Param limit must be a number");

    let results = { count: 0, results: [] };
    let keys = [];
    let pool = [];

    query = query.toString().toLowerCase();

    if (
      scope === "province" ||
      scope === "city" ||
      scope === "district" ||
      scope === "urban"
    )
      this.data.filter((item, index) => {
        if (item[scope].toLowerCase().indexOf(query) >= 0) keys.push(index);
      });
    else throw new Error("Invalid scope supplied.");

    keys.forEach((index) => {
      pool.push(this.data[index]);
    });

    // 4. Set results
    results.count = pool.length;
    if (limit == 0) {
      results.results = pool;
    } else {
      pool.length > limit
        ? (results.results = pool.slice(0, limit))
        : (results.results = pool);
    }

    // 5. Return results
    return results;
  },
};
