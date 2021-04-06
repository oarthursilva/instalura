import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';

import { TextField } from './index';

describe('<TextField />', () => {
  test('render component', () => {
    render(
      <TextField
        placeholder="test placeholder"
        name="testname"
        value="test value"
        onChange={() => { }}
      />,
    );

    expect(screen.getByRole('textbox')).toHaveValue('test value');
  });

  test('render component with alert role', () => {
    render(
      <TextField
        placeholder="test placeholder"
        name="testname"
        value="test value"
        onChange={() => { }}
        isTouched
        error="test error"
      />,
    );

    expect(screen.getByRole('alert')).toHaveTextContent('test error');
  });

  describe('when component input it is valid', () => {
    describe('and user is typing', () => {
      test('should update the value', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="test placeholder"
            name="testname"
            value="test value"
            onChange={onChangeMock}
            isTouched
          />,
        );

        const textFieldComponent = screen.getByPlaceholderText(/test placeholder/i);
        user.type(textFieldComponent, 'test placeholder changed');

        expect(onChangeMock).toHaveBeenCalledTimes(24);
      });
    });
  });

  describe('when component input it is not valid', () => {
    test('should display a feedback message at bottom', () => {
      render(
        <TextField
          placeholder="test placeholder"
          name="testname"
          value="test@value"
          onChange={() => { }}
          isTouched // true
          isFieldInvalid // true
          error="test error"
        />,
      );

      const textFieldComponent = screen.getByPlaceholderText(/test placeholder/i);
      expect(textFieldComponent).toHaveValue('test@value');
      expect(textFieldComponent).toMatchSnapshot();

      expect(screen.getByRole('alert')).toHaveTextContent('test error');
    });
  });
});
