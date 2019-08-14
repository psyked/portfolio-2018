import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Banner from './Banner'

export default props => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "dpip-image.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Banner {...props} image={image} />
}
