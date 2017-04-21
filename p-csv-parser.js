(() => {
  'use strict';

  const defaultOptions = {
    delimiter: ',',
    headers: true
  };

  /**
   * p-csv-parser
   * A simple and blazing fast csv parser, promisified.
   * 
   * @param {String} csvStr The csv content as string.
   * @param {Object} options An object containing the options.
   */
  const csvParser = (csvStr, options = {}) => {
    options = Object.assign(defaultOptions, options);

    return new Promise((resolve, reject) => {
      let rows      = csvStr.split('\n'),
        headers     = (options.headers === true) ? rows.splice(0, 1)[0].split(options.delimiter) : options.headers,
        i           = 0,
        len         = rows.length,
        headersLen  = headers.length, 
        results     = [],
        obj         = {},
        row, j;

      for (; i < len; i++) {
        // Skip emty lines
        if (rows[i].length === 0) continue;
        
        row = rows[i].split(options.delimiter);
        j   = 0;

        for (; j < headersLen; j++) {
          // Set empty fields to null
          if (row[j].length === 0) obj[headers[j]] = null;
          else obj[headers[j]] = row[j];
        }

        results.push(obj);
      }

      resolve(results);
    });
  };

  module.exports = csvParser;

})();
