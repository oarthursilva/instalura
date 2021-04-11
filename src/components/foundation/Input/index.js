import React from 'react';
import PropTypes from 'prop-types';
import { TextBase } from '../Text';

export function Input({ variant, children, ...props }) {
  return (
    <TextBase
      as="input"
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Input.propTypes = {
  variant: PropTypes.oneOf(['title', 'subTitle', 'paragraph1', 'paragraph2', 'smallestException']),
  children: PropTypes.node,
};

Input.defaultProps = {
  variant: 'paragraph1',
  children: null,
};
