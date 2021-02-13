import { breakpoints } from '../index';
import { css } from 'styled-components';

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointsNames = Object.keys(cssByBreakpoint);

  return breakpointsNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointsName) => {
      return css`
        @media only screen and (min-width: ${breakpoints[breakpointsName]}px) {
          ${cssByBreakpoint[breakpointsName]} ;
      }
      `;
    });
}
