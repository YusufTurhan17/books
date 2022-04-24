import React from 'react'
import styled from 'styled-components'
import {
  layout,
  flexbox,
  position,
  PositionProps,
  FlexboxProps,
  LayoutProps
} from 'styled-system'

export { default as CardImage } from './CardImage'
export { default as CardContent } from './CardContent'
export { default as CardTag } from './CardTag'

interface CardProps extends FlexboxProps, LayoutProps, PositionProps {
  children: React.ReactNode
}

const Card = styled.div<CardProps>`
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  box-shadow: 4px 4px 10px 0 rgba(9, 14, 20, 0.2);

  ${layout}
  ${flexbox}
  ${position}
`

export default Card
