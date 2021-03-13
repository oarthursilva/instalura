import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../commons/Link';

import { TextBase } from './styles';

export function Text({
  tag, variant, href, children, ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span', 'input']),
  variant: PropTypes.oneOf(['title', 'paragraph1', 'paragraph2', 'smallestException']),
  href: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  href: '',
  children: null,
};
