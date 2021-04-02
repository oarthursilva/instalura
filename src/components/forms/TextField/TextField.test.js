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

    // screen.debug();
    const textField = screen.getByPlaceholderText(/test placeholder/i);
    expect(textField).toMatchSnapshot();
  });
});
