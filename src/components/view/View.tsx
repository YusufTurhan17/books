import styled from 'styled-components'
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps
} from 'styled-system'

interface ViewProps
  extends FlexboxProps,
    LayoutProps,
    SpaceProps,
    PositionProps {}

const View = styled.div<ViewProps>`
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`

export default View
