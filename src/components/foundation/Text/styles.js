import styled, { css } from 'styled-components';
import get from 'loadsh/get';

import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;
const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
  md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
})}
`;

export const TextStyleVariantMap = {
  smallestException,
  paragraph1,
  title
};

export const TextBase = styled.span`
  /* ${({ theme, variant }) => get(theme, `typographyVariants.${variant}`)}; */

  ${propToStyle('textAlign')}
  ${propToStyle('marginBottom')}
  ${propToStyle('margin')}

  ${({ variant }) => TextStyleVariantMap[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;
