import styled, { css } from 'styled-components';
import get from 'loadsh/get';

const buttonGhost = css`
  color: ${(({ theme, variant }) => get(theme, `colors.${variant}.color`))};
  background: transparent;
`
const buttonDefault = css`
  color: ${(({ theme, variant }) => get(theme, `colors.${variant}.contrastText`))};
  background-color: ${(({ theme, variant }) => get(theme, `colors.${variant}.color`))};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 36px;
  font-weight: bold;
  opacity: 1;
  ${function (props) {
    return props.ghost ? buttonGhost : buttonDefault;
  }}
  border-radius: ${(({ theme }) => theme.borderRadius)};
  transition: ${(({ theme }) => theme.transition)};
  &:hover,
  &:focus {
    opacity: .8
  }  
`;