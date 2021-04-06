import styled, { css } from 'styled-components';
import { Text } from '../../foundation/Text';

export const InputBase = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
      font-size: 11px;
    }
  `}
`;

export const InputWrapper = styled.div`
  margin-bottom: 17px;
`;

InputBase.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};
