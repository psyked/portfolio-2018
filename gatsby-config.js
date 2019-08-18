module.exports = {
  siteMetadata: {
    title: 'James Ford',
    author: 'James Ford',
    description: "James Ford's Portfolio",
  },
  // uncomment this if you're going to host at anything other than the root of the domain.
  // pathPrefix: `/portfolio-2018`,
  plugins: [
    // make the contents of posts available to graphql
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/presentations`,
        name: 'presentations',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: 'projects',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans', 'Roboto'],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-favicon',
    'gatsby-plugin-extract-image-colors',
  ],
}
