import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

const currentYear = new Date().getFullYear()

class Blog extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges },
        site: {
          siteMetadata: { title: siteTitle, description: siteDescription },
        },
        image,
      },
    } = this.props

    const groupedPosts = edges
      .map(({ node }) => node)
      .reduce((prev, curr, arr) => {
        const year = new Date(curr.frontmatter.date).getFullYear()
        if (!prev[year]) {
          prev[year] = {
            year,
            posts: [],
          }
        }
        prev[year].posts.push(curr)
        return prev
      }, {})

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
          title="Blog Posts"
          image={image}
          imageCredit={
            <span>
              <a href="https://unsplash.com/@yingchih_hao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Yingchih Hao
              </a>{' '}
              on{' '}
              <a href="/search/photos/keyboard?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
                Unsplash
              </a>
            </span>
          }
        />
        <div className="bodyContainer">
          <div className="inner">
            <div className="bodyContent">
              <h3>Posts from {currentYear}</h3>
              <ul>
                {edges
                  .filter(edge => !!edge.node.frontmatter.date)
                  .filter(
                    edge =>
                      new Date(edge.node.frontmatter.date) >
                      new Date(currentYear + '-01-01')
                  )
                  .map(edge => {
                    return (
                      <li key={edge.node.id}>
                        <Link to={edge.node.frontmatter.path}>
                          {edge.node.frontmatter.title} (
                          {edge.node.frontmatter.date})
                        </Link>
                      </li>
                    )
                  })}
              </ul>
            </div>
            <hr />
            <div className="bodyContent">
              <header className="major">
                <h2>Blog Post Archive</h2>
              </header>

              <aside className="box">
                <p>
                  This is a curated collection of published articles written by
                  myself. Some legacy blog posts that lack substantial unique
                  content have been culled. Some articles are copies that were
                  originally published elsewhere. Formatting may have changed
                  and assets or external resources may have been adversely
                  affected by the passage of time and the evolution of
                  technology.
                </p>
              </aside>

              {Object.keys(groupedPosts)
                .filter(key => parseInt(key, 10) < currentYear)
                .sort((a, b) => b - a)
                .map(key => {
                  const { year, posts } = groupedPosts[key]
                  return (
                    <section key={year}>
                      <h3>Posts from {year}</h3>
                      <ul key={year}>
                        {posts
                          .filter(post => !!post.frontmatter.date)
                          .filter(
                            post =>
                              new Date(post.frontmatter.date) <
                              new Date(currentYear + '-01-01')
                          )
                          .map(post => {
                            return (
                              <li key={post.id}>
                                <Link to={post.frontmatter.path}>
                                  {post.frontmatter.title} (
                                  {post.frontmatter.date})
                                </Link>
                              </li>
                            )
                          })}
                      </ul>
                    </section>
                  )
                })}
              <hr className="endPost" />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query BlogsQuery {
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
    image: file(relativePath: { eq: "yingchih-hao-TZj-urJKRao-unsplash.jpg" }) {
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
