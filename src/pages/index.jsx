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
          title={<>James Ford</>}
          image={image}
          imageCredit={
            <span>
              Photo by{' '}
              <a href="https://unsplash.com/@sandrokatalina?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Sandro Katalina
              </a>{' '}
              on{' '}
              <a href="/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
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
                  <h2>
                    <span className="label" role="presentation">
                      current job title:
                    </span>
                    Technical Lead at comparethemarket.com
                  </h2>
                  <p>
                    <span className="label" role="presentation">
                      biography:
                    </span>
                    <span class="highlight">I make things for the web,</span>{' '}
                    currently with React as my "weapon of choice." Prior to that
                    I've built component libraries following the atomic design
                    principles, JavaScript-based eBook readers, realtime
                    competitive educational multiplayer HTML5 games, iOS and
                    Android Apps, Flash games, desktop applications and
                    run-of-the-mill websites.
                  </p>
                </div>
              </section>
            </article>

            <hr />

            <article>
              <section className="bodyContent">
                <p>
                  <span className="label" role="presentation">
                    about this website:
                  </span>
                  This is my portfolio website, powered by Gatsby and hosted
                  using GitHub Pages. It exists to mirror any content that I
                  create elsewhere on the web, because it seems prudent to
                  maintain a level of distrust of third party services.
                </p>
                <p>
                  This website is designed with the intent to be fast,
                  lightweight and accessible. It is primarily about the content
                  and exploring what can be achieved with raw text and media
                  files, rather than bespoke HTML.
                </p>
              </section>
            </article>

            <hr />

            <section className="bodyContent">
              <span className="label" role="presentation">
                README
              </span>
              <ReactMarkdown source={content} />
            </section>

            {/* <hr className="endPost" /> */}
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
    image: file(
      relativePath: { eq: "sandro-katalina-k1bO_VTiZSs-unsplash.jpg" }
    ) {
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
