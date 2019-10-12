import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import styled from 'styled-components'

const SwitchWrapper = styled.label`
  background-color: white;
  border-radius: 18px;
  cursor: pointer;
  display: inline-block;
  height: 20px;
  padding: 3px;
  position: relative;
  vertical-align: top;
  width: 56px;
  box-sizing: content-box;
`

const Label = styled.span`
  background: goldenrod none repeat scroll 0 0;
  border-radius: inherit;
  display: block;
  font-size: 10px;
  height: inherit;
  position: relative;
  text-transform: uppercase;
  transition: all 0.15s ease-out 0s;

  ::before,
  ::after {
    line-height: 1;
    margin-top: -0.5em;
    position: absolute;
    top: 50%;
    transition: inherit;
  }
`

const Handle = styled.span`
  background-color: white;
  border-radius: 10px;
  height: 18px;
  left: 4px;
  position: absolute;
  top: 4px;
  transition: left 0.15s ease-out 0s;
  width: 18px;

  ::before {
    // background-color: black;
    border-radius: 6px;
    content: '';
    height: 12px;
    left: 50%;
    margin: -6px 0 0 -6px;
    position: absolute;
    top: 50%;
    width: 12px;
  }
`

const Input = styled.input`
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;

  :checked ~ ${Label} {
    background: black none repeat scroll 0 0;
  }

  :checked ~ ${Handle} {
    left: 37px;
  }
`

class ThemeSwitch extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <SwitchWrapper className="switch">
            <Input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />
            <Label />
            <Handle />
          </SwitchWrapper>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeSwitch
