import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  max-width: 60em;
  margin: 0 auto;
  position: sticky;
  z-index: 100;
  display: block;
  margin-bottom: -60px;
`

const Nav = styled.nav`
  border-radius: 0.3em;
  background: hsl(240, 14%, 19%);
  border: 1px solid hsl(240, 14%, 99%);
  padding: 0.5em 0.2em 0.5em 0.7em;
  top: 0;
  display: inline-block;
  margin-top: 0.5em;
  margin-left: -2em;
`

const MenuLink = styled(Link)`
  margin-right: 0.5em;
  color: hsl(240, 14%, 99%);
  padding: 0.4em;
  margin-left: -0.4em;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  &.active {
    border-radius: 0.15em;
    background-color: hsl(346, 88%, 52%);
  }
`

const HeaderComponent = props => (
  <Header>
    <Nav>
      <MenuLink to="/" activeClassName="active" exact>
        Home
      </MenuLink>
      <MenuLink to="/blog/" activeClassName="active">
        Blog Archive
      </MenuLink>
      <MenuLink to="/speaking/" activeClassName="active">
        Public Speaking
      </MenuLink>
    </Nav>
  </Header>
)

export default HeaderComponent
