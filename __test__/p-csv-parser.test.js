(() => {
  'use strict';

  const fs = require('fs-promise');

  const csvParser = require('../p-csv-parser');

  const filepath = __dirname +'/test.csv';

  describe('Successfully parsed', () => {

    test('parse csv file', () => {
      return fs.readFile(filepath, 'utf-8')
        .then(content => csvParser(content, {delimiter: '|'}))
        .then(results => {
          expect(results).toBeInstanceOf(Array);
          expect(results.length).toEqual(9);
          
          let i = 0,
            len = 9;

          for (; i < len; i++) {
            expect(results[i]).toHaveProperty('country_code', 'LU');

            expect(results[i]).toHaveProperty('postal_code');
            expect(results[i].postal_code).toMatch(/L-[0-9]{4}/);

            expect(results[i]).toHaveProperty('place_name', 'Luxembourg');

            expect(results[i]).toHaveProperty('admin_name1', null);
            expect(results[i]).toHaveProperty('admin_code1', null);
            expect(results[i]).toHaveProperty('admin_name2', null);
            expect(results[i]).toHaveProperty('admin_code2', null);
            expect(results[i]).toHaveProperty('admin_name3', null);
            expect(results[i]).toHaveProperty('admin_code3', null);

            expect(results[i]).toHaveProperty('latitude');
            expect(results[i].latitude).toMatch(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/);

            expect(results[i]).toHaveProperty('longitude');
            expect(results[i].longitude).toMatch(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/);

            expect(results[i]).toHaveProperty('accuracy', '4');
          }
        });
    });

  });
})();
