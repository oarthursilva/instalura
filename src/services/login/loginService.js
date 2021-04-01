import { destroyCookie, setCookie } from 'nookies';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Fail to login with credentials provided.');
    });
}

export const loginService = {
  async login({ username, password }) {
    return HttpClient('https://instalura-api.vercel.app/api/login', {
      method: 'POST',
      body: {
        username,
        password,
      },
    })
      .then((response) => {
        console.log(response);

        const { token } = response.data;
        const DAY_IN_SECONDS = 86400;
        setCookie(null, 'APP_TOKEN', token, {
          path: '/',
          maxAge: DAY_IN_SECONDS * 7,
        });

        return {
          token,
        };
      });
  },

  async logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
