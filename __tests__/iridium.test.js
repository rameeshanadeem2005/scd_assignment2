const iridium = require('../src/iridium');
const utils = require('../src/utils');
const fs = require('fs');
const nock = require('nock');

jest.mock('fs');

describe('Iridium module', () => {
  test('getTable exists', () => {
    expect(typeof iridium.getTable).toBe('function');
  });

  test('getTable handles empty database', async () => {
    nock('https://www.heavens-above.com')
      .get(/IridiumFlares\.aspx/)
      .reply(200, '<html><form><table class="standardTable"><tbody></tbody></table></form></html>');

    const config = { root: '/tmp/', pages: 0 };
    iridium.getTable(config);
  });
});
