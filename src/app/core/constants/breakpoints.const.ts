export const BREAKPOINTS = {
  mobile:  '(max-width: 599px)',
  tablet:  '(max-width: 1024px)',
  desktop: '(min-width: 1025px)',
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
