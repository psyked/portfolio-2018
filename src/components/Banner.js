import React from 'react'
// import { withPrefix } from 'gatsby-link'
import Img from 'gatsby-image'
import { format } from 'date-fns'
import styled from 'styled-components'

const Wrapper = styled.header`
  background: center center / cover hsl(240, 100%, 12%);
  position: relative;
  padding-top: calc(68px + 2em);
  padding-bottom: 3em;
  margin-top: -1em;
`

const Overlay = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: hsla(240, 100%, 12%, 0.6);
  z-index: 1;
`

const ImageContainer = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin:0;
}`

const ImageWrapper = styled(Img)`
  height: 100%;
`
const ImageCredit = styled.figcaption`
  position: absolute;
  bottom: 1em;
  right: 1.6em;
  font-size: 0.6em;
  color: white;
  z-index: 2;
`

const Banner = ({ title, date, description, image, imageCredit, ...props }) => (
  <Wrapper style={{ minHeight: '320px' }} {...props}>
    {image && image.childImageSharp && (
      <ImageContainer>
        <ImageWrapper {...image.childImageSharp} />
        {!!imageCredit && (
          <ImageCredit>Cover image credit: {imageCredit}</ImageCredit>
        )}
      </ImageContainer>
    )}
    <Overlay />
    <div
      className="bodyContent"
      style={{
        color: 'white',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {!!title && (
        <header>
          <h1>{title}</h1>
        </header>
      )}
      {!!description && (
        <div>
          <h2>{description}</h2>
        </div>
      )}
      {!!date && (
        <aside>Published: {format(new Date(date), 'DD MMM YYYY')}</aside>
      )}
    </div>
  </Wrapper>
)

export default Banner
