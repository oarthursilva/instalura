import React from 'react';
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

    const textFieldPlaceholder = screen.getByPlaceholderText(/test placeholder/i);
    const textFieldValue = screen.getByDisplayValue(/test value/i);

    expect(textFieldPlaceholder).toMatchSnapshot();
    expect(textFieldValue).toMatchSnapshot();
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

    const textAlert = screen.getByRole('alert');
    expect(textAlert).toHaveTextContent('test error');
  });
});
