import { ThemeProvider as Provider } from 'styled-components'

import colors, { Colors, ColorTypes } from './colors'
import fonts, { Fonts, FontTypes } from './fonts'
import fontSizes, { FontSizes, FontSizeTypes } from './fontSizes'
import fontWeights, { FontWeights, FontWeightTypes } from './fontWeights'
import breakpoints, { BreakpointTypes } from './breakpoints'
import mediaQueries, { MediaQueries, MediaQueryTypes } from './mediaQueries'
import borders, { Borders, BorderTypes } from './borders'
import space, { Spaces, SpaceTypes } from './space'
import radii, { Radii, RadiusTypes } from './radii'
import sizes, { Sizes, SizeTypes } from './sizes'
import shadows, { Shadows, ShadowTypes } from './shadows'
import zIndices, { Zindices, ZIndexTypes } from './zIndices'

export {
  Colors,
  Fonts,
  FontSizes,
  FontWeights,
  MediaQueries,
  Borders,
  Spaces,
  Radii,
  Sizes,
  Shadows,
  Zindices
}

export interface Theme {
  colors: ColorTypes
  fonts: FontTypes
  fontSizes: FontSizeTypes
  fontWeights: FontWeightTypes
  breakpoints: BreakpointTypes
  mediaQueries: MediaQueryTypes
  borders: BorderTypes
  space: SpaceTypes
  radii: RadiusTypes
  sizes: SizeTypes
  shadows: ShadowTypes
  zIndices: ZIndexTypes
}

export const uiKitTheme: Theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  breakpoints,
  mediaQueries,
  borders,
  space,
  radii,
  sizes,
  shadows,
  zIndices
}

interface ThemeProviderProps {
  theme?: Theme
  children: React.ReactNode
}

const ThemeProvider = ({
  children,
  theme = uiKitTheme
}: ThemeProviderProps) => {
  const extendedTheme = { ...uiKitTheme, ...theme }

  return <Provider theme={extendedTheme}>{children}</Provider>
}

export default ThemeProvider
