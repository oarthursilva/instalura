import styled, { css } from 'styled-components';
import get from 'loadsh/get';

import { TextStyleVariantMap } from '../../foundation/Text/styles';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

import { propToStyle } from '../../../theme/utils/propToStyle';

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
  padding: 12px 42px;
  opacity: 1;
  transition: ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ ghost }) => ghost ? buttonGhost : buttonDefault}
  &:hover,
  &:focus {
    opacity: .8
  }

  ${propToStyle('margin')}
  ${propToStyle('display')}

  ${breakpointsMedia({
  xs: css`
      ${(TextStyleVariantMap.smallestException)}
    `,
  md: css`
      ${(TextStyleVariantMap.paragraph1)}
    `,
})}
`;
