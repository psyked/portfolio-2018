import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

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

                <Banner />

            </div >
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