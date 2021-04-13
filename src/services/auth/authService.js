import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

import { loginService, LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';
import { HttpClient } from '../../infra/http/httpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

export const authService = (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  const BASE_URL = isStagingEnv
    // Backend DEV
    ? 'https://instalura-api-git-master-omariosouto.vercel.app'
    // Backend Production
    : 'https://instalura-api.vercel.app';

  return {
    async getToken() {
      return token;
    },
    async hasActiveSession() {
      return HttpClient(`${BASE_URL}/api/auth`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(({ data }) => {
          if (data.authenticated) {
            return true;
          }
          loginService.logout(ctx);
          return false;
        })
        // display error as a popup
        .catch(() => {
          loginService.logout(ctx);
          return false;
        });
    },

    async getSession() {
      const session = jwt.decode(token);
      return session.user;
    },
  };
};
