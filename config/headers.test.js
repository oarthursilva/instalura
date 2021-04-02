/* eslint-disable no-console */
import headers from './headers';

console.log(headers);
describe('config/headers', () => {
  test('when headers is requested should match the static def', () => {
    const headersExpected = headers;
    const headersActual = [
      {
        source: '/app/:path*/',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
    expect(headersExpected).toEqual(headersActual);
  });

  test('when headers is requested should match the snapshot', () => {
    const headersExpected = headers;
    expect(headersExpected).toMatchSnapshot();
  });
});
