import styled, { css } from 'styled-components';
import get from 'loadsh/get';
import { TextStyleVariantMap } from '../../foundation/Text/styles';

const buttonGhost = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;
const buttonDefault = css`
  color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 36px;
  font-weight: 700 !important;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${(TextStyleVariantMap.smallestException)}

  ${({ ghost }) => ghost ? buttonGhost : buttonDefault}
  &:hover,
  &:focus {
    opacity: .8
  }  
`;
