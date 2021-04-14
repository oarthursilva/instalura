import { renderHook } from '@testing-library/react-hooks';
import { useUserService } from './index';

const userServiceModule = {
  async getProfilePage() {
    return 'test message';
  },
};

const userServiceModuleError = {
  async getProfilePage() {
    throw new Error('test error message');
  },
};

describe('useUserService', () => {
  describe('getProfilePage()', () => {
    test('when the request succeed', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useUserService(userServiceModule));

      const initialValues = { data: null, loading: true, error: null };
      expect(result.current.response).toEqual(initialValues);

      result.current.getProfilePage();
      await waitForNextUpdate();

      const initialValuesUpd = { data: 'test message', loading: false, error: null };
      expect(result.current.response).toEqual(initialValuesUpd);
    });

    test('when the request fails', async () => {
      // eslint-disable-next-line max-len
      const { result, waitForNextUpdate } = renderHook(() => useUserService(userServiceModuleError));

      const initialValues = { data: null, loading: true, error: null };
      expect(result.current.response).toEqual(initialValues);

      result.current.getProfilePage();
      await waitForNextUpdate();

      const initialValuesUpd = { data: null, loading: false, error: 'test error message' };
      expect(result.current.response).toEqual(initialValuesUpd);
    });
  });
});
