/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aurélio Miranda`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}
