import { loginService } from './loginService';

const token = 'fake-token';
const setCookieModule = jest.fn();
const httpClientModule = jest
  .fn()
  .mockImplementationOnce(
    () => Promise.resolve({
      data: {
        token,
      },
    }),
  );
async function httpClientModuleError() {
  return {
    data: {},
    err: {
      message: 'Fail to login with credentials provided.',
    },
  };
}

describe('loginService', () => {
  describe('login()', () => {
    describe('when user try to login', () => {
      describe('and it succeed', () => {
        test('store its token', async () => {
          const response = await loginService.login({
            username: 'someusername',
            password: 'somepassword',
          }, setCookieModule, httpClientModule);

          expect(setCookieModule).toHaveBeenCalledWith(null, 'LOGIN_COOKIE_APP_TOKEN', token, {
            path: '/',
            maxAge: 604800,
          });

          expect(response).toEqual({ token });
        });
      });
      describe('and it fails', () => {
        test('throws an error', async () => {
          await expect(
            loginService.login({
              username: 'someusername',
              password: 'somepassword',
            }, setCookieModule, httpClientModuleError),
          )
            .rejects
            .toThrow('Fail to login with credentials provided.');
        });
      });
    });
  });

  describe('logout()', () => {
    describe('when user try to logout and succeed', () => {
      test('remove its token', async () => {
        const destroyCookieModule = jest.fn();
        await loginService.logout(null, destroyCookieModule);

        expect(destroyCookieModule).toHaveBeenCalledWith(null, 'LOGIN_COOKIE_APP_TOKEN', { path: '/' });
      });
    });
  });
});
