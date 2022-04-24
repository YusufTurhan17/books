import styled from 'styled-components'
import {
  grid,
  GridProps as GridPropsStyledSystem,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps
} from 'styled-system'

interface GridProps extends GridPropsStyledSystem, FlexboxProps, LayoutProps {}

const Grid = styled.div<GridProps>`
  ${grid}
  ${flexbox}
  ${layout}
`

export default Grid
