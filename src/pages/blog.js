import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

class Blog extends React.Component {
    render() {

        const {
            data: {
                allMarkdownRemark: {
                    edges
                },
                site: {
                    siteMetadata: {
                        title: siteTitle,
                        description: siteDescription
                    }
                }
            }
        } = this.props

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <header className="major">
                    <h2>Recent Blog Posts</h2>
                </header>

                <h3>2018</h3>
                <ul>
                    {
                        edges
                            .filter(edge => !!edge.node.frontmatter.date)
                            .filter(edge => new Date(edge.node.frontmatter.date) > new Date('2018-01-01'))
                            .map(edge => {
                                return (
                                    <li key={edge.node.id}>
                                        <Link to={edge.node.frontmatter.path}>
                                            {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
                                    </Link>
                                    </li>
                                )
                            })
                    }
                </ul>

                <header className="major">
                    <h2>Blog Post Archive</h2>
                </header>

                <aside className="box">
                    <p>
                        This is a curated collection of published articles written by myself.
                        Some legacy blog posts that lack substantial unique content have been culled.
                        Some articles are copies that were originally published elsewhere.
                        Formatting may have changed and assets or external resources may have been adversely affected by the passage of time and the evolution of technology.
                    </p>
                </aside>

                <ul>
                    {
                        edges
                            .filter(edge => !!edge.node.frontmatter.date)
                            .filter(edge => new Date(edge.node.frontmatter.date) < new Date('2018-01-01'))
                            .map(edge => {
                                return (
                                    <li key={edge.node.id}>
                                        <Link to={edge.node.frontmatter.path}>
                                            {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
                                    </Link>
                                    </li>
                                )
                            })
                    }
                </ul>

            </div>
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
                    tags
                }
            }
        }
    }
}
`