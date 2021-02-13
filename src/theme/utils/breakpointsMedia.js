import { breakpoints } from '../index';
import { css } from 'styled-components';

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointsNames = Object.keys(cssByBreakpoint);
  return breakpointsNames.map((breakpointsName) => {
    return css`
        @media screen and (min-width: ${breakpoints[breakpointsName]}px) {
          ${cssByBreakpoint[breakpointsName]} ;
      }
      `;
  });
}
