import React from 'react'
import { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import { format } from 'date-fns'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: center center / cover $border;
  position: relative;
  padding-top: 2em;
  padding-bottom: 3em;
`

const Overlay = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: rgba($border, 0.6);
`

const ImageContainer = styled.aside`   position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
}`

const ImageWrapper = styled(Img)`
  height: 100%;
`

const Banner = ({ title, date, description, image }) => (
  <Wrapper>
    {image && image.childImageSharp && (
      <ImageContainer>
        <ImageWrapper sizes={image.childImageSharp.sizes} />
      </ImageContainer>
    )}
    <Overlay />
    <div
      className="bodyContent"
      style={{
        color: 'white',
        position: 'relative',
      }}
    >
      <header>
        <h1>{title}</h1>
      </header>
      {description && (
        <div>
          <h2>{description}</h2>
        </div>
      )}
      <aside>Published: {format(new Date(date), 'DD MMM YYYY')}</aside>
    </div>
  </Wrapper>
)

export default Banner
