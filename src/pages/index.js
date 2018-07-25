import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import ProfileImage from '../assets/images/profile-image.jpg'

import ReactMarkdown from 'react-markdown'
import content from 'raw!./README.md'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>

                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <section>
                    <div>
                        <img src={ProfileImage} width="120" height="120" />
                    </div>
                    <div>
                        <header>
                            <h1>Hi, I&apos;m James.</h1>
                        </header>
                        <div>
                            <h2>Technical Lead at comparethemarket.com</h2>
                            <p>
                                I make things using <Link to={'/tag/javascript'}>Javascript</Link> and <Link to={'/tag/html'}>HTML5.</Link><br />
                                I particularly care about &ldquo;delightful details&rdquo; and working with visuals.
                            </p>
                        </div>
                        <div >
                            <ul>
                                <li>
                                    <a href="//twitter.com/psyked" ><span>Twitter</span></a>
                                </li>
                                <li>
                                    <a href="//instagram.com/psyked" ><span>Instagram</span></a>
                                </li>
                                <li>
                                    <a href="//github.com/psyked" ><span>GitHub</span></a>
                                </li>
                                <li>
                                    <a href="//linkedin.com/in/jamesford" ><span>LinkedIn</span></a>
                                </li>
                                <li>
                                    <a href="//medium.com/@psyked" ><span>Medium</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bodyContent">
                    <ReactMarkdown source={content} />
                </section>

            </div>
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
            },
        allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }) {
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