import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledNavbar = styled.nav`
  padding: 0.8rem 0;
`

const StyledLink = styled(Link)`
  ${({ theme }) => theme.mediaQueries.lg} {
  }

  color: #fff;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  & + & {
    margin-left: 100px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLink to="/">Books</StyledLink>
      <StyledLink to="/favorite-books">Favorite Books</StyledLink>
    </StyledNavbar>
  )
}
export default Navbar
