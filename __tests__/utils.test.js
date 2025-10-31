const utils = require('../src/utils');

test('getTimestamp converts HH:MM:SS to seconds', () => {
  expect(utils.getTimestamp('01:02:03')).toBe(3723);
});

test('md5 returns a hash', () => {
  const hash = utils.md5('test');
  expect(hash).toHaveLength(32);
});

test('get_options returns an object with url', () => {
  const result = utils.get_options('target');
  expect(result).toHaveProperty('url');
});

test('post_options returns object with method POST', () => {
  const result = utils.post_options('target', {});
  expect(result.method).toBe('POST');
});
