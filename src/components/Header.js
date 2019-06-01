import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import styles from './header.module.scss'

const Header = styled.header`
  background: hsl(240, 14%, 19%);
  border-bottom: 1px solid hsl(240, 14%, 99%);
  padding: 0.5em;
  position: sticky;
  top: 0;
  z-index: 100;
`

const MenuLink = styled(Link)`
  margin-right: 0.5em;
  color: hsl(240, 14%, 99%);
  padding: 0.4em;
  margin-left: -0.4em;
  position: relative;

  &.active {
    background-color: hsl(346, 88%, 52%);
    border-radius: 0.3em;

    &::after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: hsla(346, 88%, 52%, 0);
      border-top-color: hsl(346, 88%, 52%);
      border-width: 0.6em;
      margin-left: -0.6em;
    }
  }
`

const HeaderComponent = props => (
  <Header>
    <nav className="bodyContent">
      <MenuLink to="/" activeClassName="active" exact>
        Home
      </MenuLink>
      <MenuLink to="/blog/" activeClassName="active">
        Blog Archive
      </MenuLink>
      <MenuLink to="/speaking/" activeClassName="active">
        Public Speaking
      </MenuLink>
    </nav>
  </Header>
)

export default HeaderComponent
