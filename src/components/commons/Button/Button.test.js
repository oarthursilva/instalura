import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';

import { Button } from './index';

describe('<Button />', () => {
  test('render component default', () => {
    render(
      <Button
        variant="primary.main"
        fullWidth
      >
        Test
      </Button>,
    );

    const buttonComponent = screen.getByRole('button');
    expect(buttonComponent).toHaveTextContent('Test');
  });

  test('render component ghost', () => {
    render(
      <Button
        ghost
        variant="primary.main"
        fullWidth
      >
        Test
      </Button>,
    );

    const buttonComponent = screen.getByRole('button');
    expect(buttonComponent).toHaveTextContent('Test');
  });

  test('render component as link', () => {
    render(
      <Button
        href="/"
      >
        Test
      </Button>,
    );

    const buttonComponentAsLink = screen.getByText('Test');
    expect(buttonComponentAsLink).toHaveProperty('href');
  });
});
