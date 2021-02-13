import styled, { css } from 'styled-components';
import get from 'loadsh/get';

export const TextStyleVariantMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,
  paragraph2: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
    `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `
};

export const TextBase = styled.span`
  /* ${({ theme, variant }) => get(theme, `typographyVariants.${variant}`)}; */
  ${({ variant }) => TextStyleVariantMap[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
`;
