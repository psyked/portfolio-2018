import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaLinkedin,
} from 'react-icons/fa'

import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styled from 'styled-components'

import ReactMarkdown from 'react-markdown'
import content from 'raw-loader!../../README.md'

const TwitterLink = styled.li`
  background: #00acee;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const GitHubLink = styled.li`
  background: #181818;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const LinkedInLink = styled.li`
  background: #0077b5;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const MediumLink = styled.li`
  background: #37b042;

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

const InstagramLink = styled.li`
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );

  a,
  a:link,
  a:active,
  a:hover,
  a:visited {
    color: #ffffff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description

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

        <Banner title="James Ford" />

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
                <div>
                  <h3>Elsewhere, on social media;</h3>
                  <ul className="external-profiles">
                    <TwitterLink>
                      <a href="//twitter.com/psyked">
                        <span>
                          <FaTwitter />
                          Twitter
                        </span>
                      </a>
                    </TwitterLink>
                    <InstagramLink>
                      <a href="//instagram.com/psyked">
                        <span>
                          <FaInstagram />
                          Instagram
                        </span>
                      </a>
                    </InstagramLink>
                    <GitHubLink>
                      <a href="//github.com/psyked">
                        <span>
                          <FaGithub />
                          GitHub
                        </span>
                      </a>
                    </GitHubLink>
                    <LinkedInLink>
                      <a href="//linkedin.com/in/jamesford">
                        <span>
                          <FaLinkedin />
                          LinkedIn
                        </span>
                      </a>
                    </LinkedInLink>
                    <MediumLink>
                      <a href="//medium.com/@psyked">
                        <span>
                          <FaMedium />
                          Medium
                        </span>
                      </a>
                    </MediumLink>
                  </ul>
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
  }
`
