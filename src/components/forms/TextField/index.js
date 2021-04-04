import React from 'react';
import PropTypes from 'prop-types';

import { InputBase, InputWrapper } from './styles';
import { Text } from '../../foundation/Text';

export function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper>
      <InputBase
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />

      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};

TextField.defaultProps = {
  error: '',
  isTouched: false,
};
