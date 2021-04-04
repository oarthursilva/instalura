import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';
import { ButtonBase } from './styles';

export function Button({ href, children, ...props }) {
  const hasHref = Boolean(href);
  const componentTag = hasHref ? Link : 'button';
  const role = hasHref ? 'link' : 'button';

  return (
    <ButtonBase
      as={componentTag}
      href={href}
      role={role}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}

    </ButtonBase>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};
