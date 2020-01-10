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
          title={
            <>
              <span className="label inverse" role="presentation">
                name
              </span>
              James Ford
            </>
          }
          image={image}
          imageCredit={
            <span>
              <a href="https://www.instagram.com/benjamin_squire/">
                Ben Squire
              </a>{' '}
            </span>
          }
        />

        <div className="bodyContainer">
          <div className="inner">
            <article className="bodyContent" style={{ marginTop: '1em' }}>
              <section>
                <div>
                  <h2>
                    <span className="label" role="presentation">
                      job title
                    </span>
                    Technical Lead at comparethemarket.com
                  </h2>
                  <p>
                    <span className="label" role="presentation">
                      biography
                    </span>
                    I make things for the web, currently with React.
                  </p>
                  <p>
                    <span className="label" role="presentation">
                      about this website
                    </span>
                    This is my portfolio website, powered by Gatsby and hosted
                    using GitHub Pages. It exists to mirror any content that I
                    create elsewhere on the web.
                  </p>
                </div>
              </section>
            </article>

            <hr />

            <section className="bodyContent">
              <span className="label" role="presentation">
                README
              </span>
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
            date(formatString: "MMMM DD, yyyy")
            path
            title
          }
        }
      }
    }
    image: file(relativePath: { eq: "profile-photo.jpg" }) {
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
