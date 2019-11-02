import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { format } from 'date-fns'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Banner from '../components/SpeakingBanner'

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

const Section = styled.section`
  ${padding}
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
`

const SectionContent = styled.div`
  margin: -0.4em 0 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Title = styled.h3`
  margin-top: 0;
`

const ImageContainer = styled.div`
  width: 25%;
  margin-right: 2em;
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

        <Banner
          title="Public Speaking"
          imageCredit={
            <span>
              <a href="https://twitter.com/JackHowell">Jack Howell</a> at{' '}
              <a href="https://twitter.com/DPiPboro/status/1152660388598689793">
                DPiP
              </a>
            </span>
          }
        />

        <div className="bodyContainer">
          <div className="inner">
            <div className="bodyContent">
              <header className="major">
                {/* <h2>Projects</h2> */}
                <p>Here's a list of stuff I'm currently talking about.</p>
              </header>
            </div>
            <hr />
            <section>
              {presentations.map(
                (
                  {
                    node: {
                      frontmatter: { title, image, presentedAt, tags },
                      html,
                    },
                  },
                  index
                ) => {
                  const color =
                    (image && image.colors && image.colors.vibrant) ||
                    `transparent`
                  return (
                    <>
                      {!!index && <hr />}
                      <Section
                        hasImage={image && image.childImageSharp}
                        // style={{
                        //   borderColor: `${color}`,
                        //   borderWidth: `0 .4em`,
                        //   marginLeft: `-.4em`,
                        //   marginRight: `-.4em`,
                        //   borderStyle: `none solid`,
                        //   marginTop: `-4em`,
                        //   marginBottom: `-4em`,
                        //   paddingTop: `4em`,
                        //   paddingBottom: `4em`,
                        // }}
                      >
                        {image && image.childImageSharp && (
                          <ImageContainer>
                            <Img {...image.childImageSharp} />
                          </ImageContainer>
                        )}
                        <SectionContent>
                          <header>
                            <Title>{title}</Title>
                          </header>
                          <article>
                            <section
                              dangerouslySetInnerHTML={{ __html: html }}
                            ></section>
                          </article>
                          <footer>
                            <ul>
                              Presented at:&nbsp;
                              {presentedAt.map(
                                ({ name, date, link, recording }) => {
                                  return (
                                    <li key={name}>
                                      <a href={link}>
                                        {`${name}, ${format(
                                          new Date(date),
                                          'Do MMMM YYYY'
                                        )}`}
                                      </a>
                                      {!!recording && (
                                        <>
                                          &nbsp;
                                          <a href={recording}>
                                            [View Recording]
                                          </a>
                                        </>
                                      )}
                                    </li>
                                  )
                                }
                              )}
                            </ul>
                            {tags && (
                              <p>
                                Tagged as:&nbsp;
                                {tags.map((name, i) => [
                                  i > 0 && ', ',
                                  <Link
                                    key={name}
                                    to={`/tag/${name.toLowerCase()}`}
                                  >
                                    {name}
                                  </Link>,
                                ])}
                              </p>
                            )}
                          </footer>
                        </SectionContent>
                      </Section>
                    </>
                  )
                }
              )}
            </section>
            <hr className="endPost" />
          </div>
        </div>
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
