import styled from 'styled-components'
import React from 'react'
import {
  layout,
  LayoutProps,
  typography,
  TypographyProps,
  variant,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps
} from 'styled-system'

import { Theme } from '../../theme'

interface TitleProps
  extends TypographyProps,
    LayoutProps,
    ColorProps,
    FlexboxProps,
    SpaceProps {
  tagName?: string
  children: React.ReactNode
  size?: 'default' | 'medium' | 'small'
}

const titleVariants = ({ theme }: { theme: Theme }) =>
  variant({
    prop: 'size',
    variants: {
      small: {
        fontSize: theme.fontSizes.sm
      },
      medium: {
        fontSize: theme.fontSizes.base
      },
      default: {
        fontSize: theme.fontSizes.title
      }
    }
  })

const Title = styled(
  ({ tagName = 'h1', size = 'default', children, ...props }: TitleProps) =>
    React.createElement(tagName, props, children)
)`
  ${titleVariants}
  ${typography}
  ${color}
  ${layout}
  ${flexbox}
  ${space}
`

export default Title
