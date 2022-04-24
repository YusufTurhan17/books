import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'

interface InputProps extends LayoutProps, SpaceProps {}

const Input = styled.input<InputProps>`
  background-color: #fff;
  border-radius: 8px;
  display: inline-block;
  font-size: 18px;
  padding: 32px 44px;
  margin-top: 20px;
  text-align: start;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid gray;
  width: 600px;
  max-width: 100%;
  ${layout}
  ${space}
`

export default Input
