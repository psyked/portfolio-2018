import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import ThemeSwitch from './ThemeSwitch'

const Header = styled.header`
  max-width: 60em;
  margin: 0 auto;
  position: sticky;
  z-index: 100;
  display: block;
  margin-bottom: -68px;
  padding-top: 0.5em;
`

const Nav = styled.nav`
  border-radius: 0.3em;
  background: hsl(240, 14%, 19%);
  padding: 0.5em 0.2em 0.5em 0.7em;
  top: 0;
  display: inline-block;
`

const MenuLink = styled(Link)`
  margin-right: 0.5em;
  padding: 0.4em;
  margin-left: -0.4em;

  &,
  a {
    &,
    :link,
    :active,
    :visited,
    :hover {
      color: hsl(240, 14%, 99%);
    }
  }

  &:last-child {
    margin-right: 0;
  }

  &.active {
    border-radius: 0.15em;
    background-color: hsl(346, 88%, 52%);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
`

const HeaderComponent = props => (
  <Header>
    <Wrapper>
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
      <ThemeSwitch />
    </Wrapper>
  </Header>
)

export default HeaderComponent
