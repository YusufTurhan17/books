import breakpoints from './breakpoints'

export enum MediaQueries {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export type MediaQueryTypes = { [key in MediaQueries]: string }

const [smallBreakpoint, mediumBreakpoint, largeBreakpoint] = breakpoints

const mediaQueries: MediaQueryTypes = {
  small: `@media screen and (min-width: ${smallBreakpoint})`,
  medium: `@media screen and (min-width: ${mediumBreakpoint})`,
  large: `@media screen and (min-width: ${largeBreakpoint})`
}

export default mediaQueries
