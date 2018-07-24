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
            <main>

                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <section id="banner" className="major">
                    <div className="inner">
                        <div>
                            <div>
                                <img src={ProfileImage} width="120" height="120" />
                            </div>
                            <div>
                                <header className="major">
                                    <h1>Hi, I&apos;m James.</h1>
                                </header>
                                <div className="content">
                                    <h2>
                                        Technical Lead at comparethemarket.com
                        </h2>
                                    <p>
                                        I make things using <Link to={'/tag/javascript'}>Javascript</Link> and <Link to={'/tag/html'}>HTML5.</Link><br />
                                        I particularly care about &ldquo;delightful details&rdquo; and working with visuals.
                        </p>
                                </div>
                                <div className="content">
                                    <ul className="icons large">
                                        <li>
                                            <a href="//twitter.com/psyked" className="icon alt fa-twitter"><span className={`label`}>Twitter</span></a></li>
                                        <li>
                                            <a href="//instagram.com/psyked" className="icon alt fa-instagram"><span className={`label`}>Instagram</span></a></li>
                                        <li>
                                            <a href="//github.com/psyked" className="icon alt fa-github"><span className={`label`}>GitHub</span></a></li>
                                        <li>
                                            <a href="//linkedin.com/in/jamesford" className="icon alt fa-linkedin"><span className={`label`}>LinkedIn</span></a></li>
                                        <li>
                                            <a href="//medium.com/@psyked" className="icon alt fa-medium"><span className={`label`}>Medium</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                <ReactMarkdown source={content} />

            </main>
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