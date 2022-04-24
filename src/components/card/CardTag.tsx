import styled from 'styled-components'

const StyledTags = styled.div`
  height: 3.3rem;
  margin: 0;
  flex-shrink: 0;
  align-items: flex-end;
  overflow: hidden;
  display: flex;
`

const StyledTag = styled.a`
  display: block;
  color: #ababaf;
  border: 0.05rem solid #ababaf;
  border-radius: 0.7rem;
`

interface CardTagProps {
  children: React.ReactNode
}

const CardTag = ({ children }: CardTagProps) => {
  return (
    <StyledTags>
      <StyledTag>{children}</StyledTag>
    </StyledTags>
  )
}

export default CardTag
