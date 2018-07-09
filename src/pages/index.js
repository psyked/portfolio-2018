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

                <Banner />

                {/* <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${'http://via.placeholder.com/350x150'})` }}>
                            <header className="major">
                                <h3>Aliquam</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${'http://via.placeholder.com/350x150'})` }}>
                            <header className="major">
                                <h3>Tempus</h3>
                                <p>feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${'http://via.placeholder.com/350x150'})` }}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${'http://via.placeholder.com/350x150'})` }}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${'http://via.placeholder.com/350x150'})` }}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{ backgroundImage: `url(${'http://via.placeholder.com/350x150'})` }}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Blog Posts</h2>
                            </header>
                            <ul>
                                {Posts}
                            </ul>
                        </div>
                    </section>
                </div> */}

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
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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