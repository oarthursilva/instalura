import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';

import { Text } from './index';

describe('<Text />', () => {
  test('render component', () => {
    const { container } = render(
      <Text
        variant="smallestException"
      />,
    );

    expect(container).not.toBeNull();
  });

  test('render component text link children', () => {
    render(
      <Text
        href="/"
      >
        Test
      </Text>,
    );

    const textComponent = screen.getByText('Test');
    expect(textComponent).toHaveProperty('href');
    // expect(textComponent).toBeEmptyDOMElement();
  });
});
