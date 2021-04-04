import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';

import { Link } from './index';

describe('<Link />', () => {
  test('render component', () => {
    render(
      <Link
        href="/"
        color="secondary.main"
      >
        Test
      </Link>,
    );

    const linkTest = screen.getByText('Test');
    expect(linkTest).toHaveAttribute('href');
    expect(linkTest).toHaveAttribute('color');
  });

  test('render component without color property', () => {
    render(
      <Link
        href="/"
      >
        Test
      </Link>,
    );

    const linkTest = screen.getByText('Test');
    expect(linkTest).toHaveAttribute('href');
  });
});
