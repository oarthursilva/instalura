import React from 'react';
import user from '@testing-library/user-event';

import { FormLogin } from './index';
import {
  render, screen, act, waitFor,
} from '../../../infra/tests/testUtils';

const onSubmit = jest.fn();
onSubmit.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    test('should submit values', async () => {
      await act(async () => render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      ));

      expect(screen.getByRole('button')).toBeDisabled();

      const inputTestname = screen.getByPlaceholderText('Usuário');
      user.type(inputTestname, 'testusername');
      await waitFor(() => expect(inputTestname).toHaveValue('testusername'));

      const inputPassword = screen.getByPlaceholderText('Palavra chave');
      user.type(inputPassword, 'testpassword');
      await waitFor(() => expect(inputPassword).toHaveValue('testpassword'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));

      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    test('display respective errors', async () => {
      render(
        <FormLogin
          onSubmit={onSubmit}
        />,
      );

      const inputTestname = screen.getByPlaceholderText('Usuário');
      inputTestname.focus();
      inputTestname.blur();
      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('"Usuário" é obrigatório');
    });
  });
});
