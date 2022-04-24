import styled from 'styled-components'
import { createElement } from 'react'
import {
  typography,
  TypographyProps,
  color,
  ColorProps,
  variant,
  space,
  SpaceProps
} from 'styled-system'

import { Theme } from '../../theme'

interface TextProps extends TypographyProps, ColorProps, SpaceProps {
  tagName?: string
  children: React.ReactNode
  size?: 'small' | 'large' | 'default'
}

const textVariants = ({ theme }: { theme: Theme }) =>
  variant({
    prop: 'size',
    variants: {
      small: {
        fontSize: theme.fontSizes.sm
      },
      large: {
        fontSize: theme.fontSizes.base
      },
      default: {
        fontSize: theme.fontSizes.base
      }
    }
  })

const Text = styled(
  ({ tagName = 'p', size = 'default', children, ...props }: TextProps) =>
    createElement(tagName, props, children)
)`
  ${textVariants}
  ${typography}
  ${color}
  ${space}
`

export default Text
