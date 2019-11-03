import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { format } from 'date-fns'

// const Image = styled.img`   
// width: 100%;
//     height: 100%;
//     object-fit: cover;`

const ImageContainer = styled.aside`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const Wrapper = styled(Img)`
    height:100%;
    object-fit: cover;
`

const Tile = styled.section`
    display: flex;
    flex: 1;
    padding: 2em;
    position: relative;

    a, a:link, a:active, a:visited, a:hover {
        color: #fcfcfd;
        // text-decoration: none;
    }
    
    h3, 
    p {
        position: relative;
    }
`

const Title = styled.h3`
        margin-top: 0;
      `
const DateLabel = styled.p`border-top: 1px solid $bg;
            display: inline-block;
        `

const TileContainer = styled.aside`
    width: 100%;
    height: calc(33vw - 2em);
    max-height: calc(30em / (16 / 9));
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    // padding-top: 2em;
    padding-bottom: 0em;
    // margin-bottom:-1em;
    background: hsl(240,100%,12%);
`

const Blackout = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: hsla(240,100%,12%,0.6);
`

const Tiles = ({ tiles }) => {
  return (
    <TileContainer>
      {tiles &&
        tiles
          .filter(tile => !!tile)
          .map((tile, index) => {
            return (
              <Tile key={index} >
                <Link to={tile.frontmatter.path}>
                  {tile.frontmatter.image &&
                    tile.frontmatter.image.childImageSharp && (
                      <ImageContainer>
                        <Wrapper
                          sizes={tile.frontmatter.image.childImageSharp.sizes}
                        />
                      </ImageContainer>
                    )}
                  <Blackout />
                  <Title>{tile.frontmatter.title}</Title>
                  <p>
                    {tile.frontmatter.description}
                  </p>
                  <DateLabel>
                    {format(new Date(tile.frontmatter.date), 'DD MMM YYYY')}
                  </DateLabel>
                </Link>
              </Tile>
            )
          })}
    </TileContainer>
  )
}

export default Tiles
