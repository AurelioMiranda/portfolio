/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Aurélio Miranda`,
    description: `This is my Portfolio`,
    twitterUsername: `@Aureliorgs`,
    image: `../src/images/icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        lang: `en`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
