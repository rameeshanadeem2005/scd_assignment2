const satellite = require('../src/satellite');
const utils = require('../src/utils');
const fs = require('fs');
const nock = require('nock');

jest.mock('fs');

describe('Satellite module', () => {
  test('getTable exists', () => {
    expect(typeof satellite.getTable).toBe('function');
  });

  test('getTable handles empty database', async () => {
    nock('https://www.heavens-above.com')
      .get(/PassSummary\.aspx/)
      .reply(200, '<html><form><table class="standardTable"><tbody></tbody></table></form></html>');

    const config = { root: '/tmp/', target: 25544, pages: 0 };
    satellite.getTable(config);
  });
});
