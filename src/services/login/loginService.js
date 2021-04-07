import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

import { HttpClient } from '../http/httpClient';

const BASE_URL = isStagingEnv
  // Backend DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Backend Production
  : 'https://instalura-api.vercel.app';

console.log('Running on', isStagingEnv ? 'Staging' : 'Production');

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
        setCookieModule(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return {
          token,
        };
      });
  },

  async logout(destroyCookieModule = destroyCookie) {
    destroyCookieModule(null, 'APP_TOKEN');
  },
};
