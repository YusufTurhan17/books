import styled from 'styled-components'
import {
  variant,
  space,
  SpaceProps,
  color,
  ColorProps,
  position,
  PositionProps
} from 'styled-system'

import { Theme } from '../../theme/index'

interface ButtonProps extends SpaceProps, PositionProps, ColorProps {
  variant: 'primary' | 'secondary' | 'icon'
}

const buttonVariants = ({ theme }: { theme: Theme }) =>
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: theme.colors.black
      },
      secondary: {
        color: 'white',
        bg: theme.colors.white
      },
      icon: {
        bg: 'transparent',
        border: 'none',
        padding: 0,
        minWidth: 'auto'
      }
    }
  })

const Button = styled('button')<ButtonProps>`
  padding: 12px 34px;
  min-width: 220px;
  border-radius: 25px;
  font-size: 18px;
  border: 1px solid #fff;
  background-color: #000;
  color: #000;
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  ${space}
  ${buttonVariants}
  ${position}
  ${color}
`

export default Button
