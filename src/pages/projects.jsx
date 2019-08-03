import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

class Speaking extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: projects },
        site: {
          siteMetadata: { title: siteTitle, description: siteDescription },
        },
      },
    } = this.props

    return (
      <Layout>
        <div className="bodyContent">
          <Helmet
            htmlAttributes={{
              lang: 'en',
            }}
          >
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>

          <header className="major">
            <h2>Projects</h2>
          </header>

          {projects.map(({ node: presentation }) => {
            return (
              <>
                <section>
                  <header>
                    <h3>{presentation.frontmatter.title}</h3>
                  </header>
                  <main
                    dangerouslySetInnerHTML={{ __html: presentation.html }}
                  />
                </section>
                <hr />
              </>
            )
          })}
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
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
