import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from './index';

describe('useForm()', () => {
  describe('when the user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          username: 'oarthursilva',
        },
      }));

      const initialValues = { username: 'oarthursilva' };
      expect(result.current.values).toEqual(initialValues);

      const event = {
        target: {
          getAttribute: () => 'username',
          value: 'Arthur',
        },
      };
      act(() => {
        result.current.handleChange(event);
      });

      const initialValuesUpd = { username: 'Arthur' };
      expect(result.current.values).toEqual(initialValuesUpd);
    });
  });
});
