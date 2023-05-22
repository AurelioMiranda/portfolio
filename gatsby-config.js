/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aurélio Miranda`,
    description: `Personal portfolio website.`,
    image: `src/images/icon.png`,
  },
  plugins: [
    "gatsby-plugin-mantine",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        lang: `en`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
  ],
}
