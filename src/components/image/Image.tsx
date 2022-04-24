import styled from 'styled-components'
import {
  position,
  PositionProps,
  border,
  BorderProps,
  space,
  SpaceProps,
  layout,
  LayoutProps
} from 'styled-system'

interface ImageProps
  extends PositionProps,
    BorderProps,
    SpaceProps,
    LayoutProps {
  objectFit?: string
  objectPosition?: string
}

const Image = styled.img<ImageProps>`
  ${position}
  ${border}
  ${space}
  ${layout}
`

export default Image
