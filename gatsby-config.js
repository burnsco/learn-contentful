require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'GatsbyJS',
        short_name: 'GatsbyJS',
        icon: 'src/images/icon.png',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-offline',
  ],
}
