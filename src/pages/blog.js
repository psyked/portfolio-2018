import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        const { data: {
            allMarkdownRemark: { edges },
        } } = this.props

        const Posts = edges
            .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
            .map(edge => <li key={edge.node.id}><Link to={edge.node.frontmatter.path}>
                {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
              </Link></li>);


        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <header className="major">
                    <h2>Blog Posts</h2>
                </header>
                <ul>
                    {Posts}
                </ul>

            </div >
        )
    }
}

export default HomeIndex

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
              }
            }
          }
        }
  }
`