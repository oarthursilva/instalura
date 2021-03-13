import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../../commons/Link';

import { TextBase } from './styles';

export function Text({
  tag, variant, href, children, ...props
}) {
  const hasHref = Boolean(href);
  const componentTag = hasHref ? Link : tag;

  return (
    <TextBase
      as={componentTag}
      href={href}
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
  variant: PropTypes.oneOf(['title', 'subTitle', 'paragraph1', 'paragraph2', 'smallestException']),
  href: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  href: undefined,
  children: null,
};
