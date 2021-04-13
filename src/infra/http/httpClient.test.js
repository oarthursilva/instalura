import { HttpClient } from './httpClient';

const url = 'http://fake-url';
const data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    message: 'fake-data',
  },
};

const renderModule = jest
  .fn()
  .mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => ({ message: 'request sent successfully' }),
  }));

const renderModuleError = jest
  .fn()
  // eslint-disable-next-line prefer-promise-reject-errors
  .mockImplementation(() => Promise.reject('fail to send request'));

describe('httpClient()', () => {
  describe('fetch', () => {
    describe('when data is requested', () => {
      test('and it succeed', async () => {
        const responseAct = await HttpClient(url, { data }, renderModule);
        const responseExp = { message: 'request sent successfully' };
        expect(responseAct).toEqual(responseExp);
      });

      test('and it fails', async () => {
        await expect(
          HttpClient(url, { data }, renderModuleError),
        )
          .rejects
          .toEqual('fail to send request');
      });
    });
  });
});
