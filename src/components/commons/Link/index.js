/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

import { LinkWrapper } from './styles';

export function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkWrapper {...props}>
        {children}
      </LinkWrapper>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
