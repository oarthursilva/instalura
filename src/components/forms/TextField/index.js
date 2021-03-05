import React from 'react';
import PropTypes from 'prop-types';

import { InputBase, InputWrapper } from './styles';

export function TextField({
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <InputWrapper>
      <InputBase
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
