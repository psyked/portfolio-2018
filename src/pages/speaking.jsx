import React, { Component } from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { format } from 'date-fns'
import styled from 'styled-components'

import Layout from '../components/layout'

const padding = `& {
    box-sizing: border-box;
    padding-left: 16px;
    padding-right: 16px;
  }
  @media (min-width: 320px) {
    & {
      padding-left: calc(7.14286vw - 6.85714px);
    }
  }
  @media (min-width: 768px) {
    & {
      padding-left: 48px;
    }
  }
  @media (min-width: 320px) {
    & {
      padding-right: calc(7.14286vw - 6.85714px);
    }
  }
  @media (min-width: 768px) {
    & {
      padding-right: 48px;
    }
  }`

const Heading = styled.h2`
  ${padding}
`

const Section = styled.section`
  ${padding}
`

class Speaking extends Component {
  render() {
    const {
      data: {
        allMarkdownRemark: { edges: presentations },
        site: {
          siteMetadata: { title: siteTitle, description: siteDescription },
        },
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

        <header className="major">
          <Heading>Public Speaking</Heading>
        </header>

        {presentations.map(
          ({
            node: {
              frontmatter: { title, presentedAt, tags },
              html,
            },
          }) => {
            return (
              <>
                <hr />
                <Section>
                  <header>
                    <h3>{title}</h3>
                  </header>
                  <article dangerouslySetInnerHTML={{ __html: html }} />
                  <footer>
                    <p>
                      Presented at:&nbsp;
                      {presentedAt.map(({ name, date, link, recording }) => {
                        return (
                          <span>
                            <a href={link}>
                              {`${name}, ${format(
                                new Date(date),
                                'Do MMMM YYYY'
                              )}`}
                            </a>
                            {!!recording && (
                              <>
                                &nbsp;<a href={recording}>[View Recording]</a>
                              </>
                            )}
                          </span>
                        )
                      })}
                    </p>
                    {tags && (
                      <p>
                        Tagged as:&nbsp;
                        {tags.map((name, i) => [
                          i > 0 && ', ',
                          <Link to={`/tag/${name.toLowerCase()}`}>{name}</Link>,
                        ])}
                      </p>
                    )}
                  </footer>
                </Section>
              </>
            )
          }
        )}
        <hr className="endPost" />
      </Layout>
    )
  }
}

export default Speaking

export const pageQuery = graphql`
  query SpeakingQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { layout: { eq: "presentation" } } }
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
            tags
            presentedAt {
              name
              date
              link
              recording
            }
          }
        }
      }
    }
  }
`
