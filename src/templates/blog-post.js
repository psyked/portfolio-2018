import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import BannerLanding from '../components/BannerLanding'
import Tiles from '../components/Tiles'
import Tags from '../components/Tags'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark || {}
    const { frontmatter: { title, tags, url, image, description } = {} } = post || {}
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { next, prev } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${title} | ${siteTitle}`} />
        <BannerLanding title={title} lead={description} image={image} />
        <div style={{
          padding: '1em 2em'
        }} dangerouslySetInnerHTML={{ __html: post.html }} />
        <Tags tags={tags} />
        {url && (
          <div className="box">
            This article was originally published at <a href={url}>{url}</a>
          </div>
        )}
        <Tiles tiles={[prev, next]} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: {path: {eq: $path } }) {
      id
      html
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          tags
          url
          image {
            childImageSharp{
              sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
              }
          }
          }
          description
      }
    }
  }
`
