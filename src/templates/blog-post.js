import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { graphql } from 'gatsby'

import Banner from '../components/Banner'
import Tiles from '../components/Tiles'
import Tags from '../components/Tags'
import SourcePost from '../components/SourcePost'
import Layout from '../components/Layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark || {}
    const { frontmatter: { title, tags, url, image, description } = {} } =
      post || {}
    const { frontmatter = {} } = post || {}
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const imageCredit = get(frontmatter, 'image_credit')
    const { next, prev } = this.props.pageContext

    return (
      <Layout>
        <Helmet
          title={`${title} | ${siteTitle}`}
          htmlAttributes={{
            lang: 'en',
          }}
        >
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@psyked" />
          <meta name="twitter:creator" content={frontmatter.creator} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          {image && image.childImageSharp && (
            <meta
              name="twitter:image"
              content={image.childImageSharp.sizes.src}
            />
          )}
        </Helmet>
        <Banner {...frontmatter} imageCreditMarkdown={imageCredit} timeToRead={post.timeToRead} />
        <div className="bodyContainer">
          <div className="inner">
            <div className="bodyContent">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr className="endPost" />
              <SourcePost url={url} />
              <Tags tags={tags} />
            </div>
          </div>
        </div>
        <Tiles tiles={[next, prev]} />
      </Layout>
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        url
        image {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
          colors {
            ...GatsbyImageColors
          }
        }
        description
        image_credit
      }
    }
  }
`
