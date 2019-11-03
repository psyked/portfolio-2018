import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledElement = styled.aside`
  margin: 1em -2em;
  padding: 1em 2em;
  background: linear-gradient(90deg,#d0d0dc 0,#d0d0dc 8px,#eeeef2 0);

  .dark & {
    background: linear-gradient(90deg,#3a3a48 0,#3a3a48 8px,#3d3d4a 0);
  }
`

const SourcePost = ({ url }) => {
  if (!url) return <Fragment />
  return (
    <StyledElement>
      This article was originally published at <a href={url}>{url}</a>
    </StyledElement>
  )
}

SourcePost.propTypes = {}

export default SourcePost
