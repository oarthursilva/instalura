import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

import { HttpClient } from '../../infra/http/httpClient';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

const BASE_URL = isStagingEnv
  // Backend DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Backend Production
  : 'https://instalura-api.vercel.app';

console.log('Running loginService on', isStagingEnv ? 'Staging' : 'Production');

export const loginService = {
  async login({ username, password },
    setCookieModule = setCookie,
    httpClientModule = HttpClient) {
    return httpClientModule(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((response) => {
        console.log(response);

        const { token } = response.data;
        const hasToken = Boolean(token);
        if (!hasToken) {
          throw new Error('Fail to login with credentials provided.');
        }
        const DAY_IN_SECONDS = 86400;
        setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return {
          token,
        };
      });
  },

  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },
};
