import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import ReactMarkdown from 'react-markdown'
import content from 'raw-loader!../../README.md'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

    const {
      data: {
        image,
        image: { colors },
      },
    } = this.props

    return (
      <Layout keyColour={colors}>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        >
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <Banner
          title="James Ford"
          image={image}
          imageCredit={
            <span>
              <a href="https://unsplash.com/@lucistan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Luca Upper
              </a>{' '}
              on{' '}
              <a href="/s/photos/colour?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          }
        />

        <div className="bodyContainer">
          <div className="inner">
            <article className="bodyContent" style={{ marginTop: '1em' }}>
              <section>
                <div>
                  <h2>Technical Lead at comparethemarket.com</h2>
                  <p>
                    I make things for the web, primarily with React. This is my
                    portfolio website, powered by Gatsby and hosted on GitHub
                    Pages. It exists to mirror any content that I create
                    elsewhere on the web.
                  </p>
                </div>
              </section>
            </article>

            <hr />

            <section className="bodyContent">
              <ReactMarkdown source={content} />
            </section>

            <hr className="endPost" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "post" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
    image: file(relativePath: { eq: "luca-upper-Z-4kOr93RCI-unsplash.jpg" }) {
      childImageSharp {
        # Specify a fluid image and fragment
        # The default maxWidth is 800 pixels
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      colors {
        ...GatsbyImageColors
      }
    }
  }
`
