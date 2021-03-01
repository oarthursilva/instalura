import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakpoint) {
  const breakpointsNames = Object.keys(cssByBreakpoint);

  return breakpointsNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointsName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointsName]}px) {
          ${cssByBreakpoint[breakpointsName]} ;
      }
      `);
}
