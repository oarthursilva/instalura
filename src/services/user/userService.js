import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/httpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  // Backend DEV
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  // Backend Production
  : 'https://instalura-api.vercel.app';

export const userService = {
  async getProfilePage(ctx) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClient(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        user: {
          totalLikes: 100,
        },
        posts: response.data,
      };
    } catch (err) {
      console.log('error', err);
      throw new Error('Not able to retrieve user posts');
    }
  },
};
