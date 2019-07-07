const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require(`unist-util-select`)
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const tagTemplate = path.resolve('./src/templates/tag-list-template.js')

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              limit: 1000
              filter: { frontmatter: { layout: { eq: "post" } } }
              sort: { order: DESC, fields: [frontmatter___date] }
            ) {
              edges {
                node {
                  frontmatter {
                    path
                    tags
                    title
                    date
                    description
                    image {
                      childImageSharp {
                        sizes(maxWidth: 630) {
                          base64
                          aspectRatio
                          src
                          srcSet
                          sizes
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges

        // Create blog posts pages.
        _.each(posts, (edge, index) => {
          const next = index === 0 ? false : posts[index - 1].node
          const prev =
            index === posts.length - 1 ? false : posts[index + 1].node
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              prev,
              next,
            },
          })
        })

        // Tag pages:
        let tags = []
        // Iterate through each post, putting all found tags into `tags`
        _.each(posts, edge => {
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags)
          }
        })
        // Eliminate duplicate tags
        tags = _.uniq(tags)

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          })
        })
      })
    )
  })
}
