/* eslint-disable no-console */
import redirects from './redirects';

console.log(redirects);
describe('config/redirects', () => {
  test('when redirect is requested should match static def', () => {
    const redirectsExpected = redirects;
    const redirectsActual = [{
      source: '/login/',
      destination: '/app/login/',
      permanent: true,
    }];
    // @Assert
    expect(redirectsExpected).toEqual(redirectsActual);
  });

  test('when redirect is requrest should match the snapshot', () => {
    const redirectsExpected = redirects;

    // @Assert
    expect(redirectsExpected).toMatchSnapshot();
  });
});
