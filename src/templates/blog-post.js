import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark || {}
    const { frontmatter = {} } = post || {}
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { next, prev } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${frontmatter.title} | ${siteTitle}`} />
        <header className="major">
          <h1>{frontmatter.title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {frontmatter.tags &&
          <div>
            <hr />
            <div className="box tags">
              Tagged as:
              {frontmatter.tags.map(tag => {
                return (
                  <span key={tag}><Link to={`/tag/${tag}`}>{tag}</Link> </span>
                )
              })}
            </div>
          </div>
        }
        {frontmatter.url &&
          <div className="box">
            This article was originally published at <a href={frontmatter.url}>{frontmatter.url}</a>
          </div>
        }
        {prev && (
          <Link to={prev.frontmatter.path}>
            Previous Post: {prev.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.path}>
            Next Post: {next.frontmatter.title}
          </Link>
        )}
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
      }
    }
  }
`
