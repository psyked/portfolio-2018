import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Banner from '../components/Banner'
import Layout from '../components/Layout'

class Speaking extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: projects },
        site: {
          siteMetadata: { title: siteTitle, description: siteDescription },
        },
        image,
      },
    } = this.props

    return (
      <Layout>
        <Helmet
          htmlAttributes={{
            lang: 'en',
          }}
        >
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <Banner
          title="Projects"
          image={image}
          imageCredit={
            <span>
              <a href="https://unsplash.com/@eagleboobs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Elliott Stallion
              </a>{' '}
              on{' '}
              <a href="/s/photos/lathe?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          }
        />

        <div className="bodyContainer">
          <div className="inner">
            <div className="bodyContent">
              <header className="major">
                <h2>Projects</h2>
              </header>

              <aside>This page is a total WIP</aside>
            </div>

            {projects.map(({ node: presentation }) => {
              const color =
                presentation.frontmatter.image &&
                presentation.frontmatter.image.colors &&
                presentation.frontmatter.image.colors.vibrant
              return (
                <>
                  <hr />
                  <div className="bodyContent">
                    <section
                      style={{
                        border: `.5em solid ${color}`,
                        borderWidth: `0 .5em`,
                        padding: `1em`,
                        margin: `0 -.5em`,
                      }}
                    >
                      <header>
                        <h3>{presentation.frontmatter.title}</h3>
                      </header>
                      {presentation.frontmatter.image &&
                        presentation.frontmatter.image.childImageSharp && (
                          <Img
                            style={{ width: '30%' }}
                            {...presentation.frontmatter.image.childImageSharp}
                          />
                        )}
                      <main
                        dangerouslySetInnerHTML={{ __html: presentation.html }}
                      />
                    </section>
                  </div>
                </>
              )
            })}
            <hr className="endPost" />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Speaking

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "project" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, yyyy")
            path
            title
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
          }
        }
      }
    }
    image: file(
      relativePath: { eq: "elliott-stallion-EJoANIqIgyo-unsplash.jpg" }
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
