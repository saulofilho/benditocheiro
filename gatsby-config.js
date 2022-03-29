module.exports = {
  siteMetadata: {
    title: `Bendito Cheiro Art`,
    description: `Produtos Artesanais`,
    siteUrl: `https://benditocheiro.art`,
    home: {
      title: `Bendito Cheiro Art`,
      description: `Produtos Artesanais feitos com amor e carinho.`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bendito Cheiro Art`,
        short_name: `Bendito Cheiro Art`,
        start_url: `/`,
        background_color: `#0d518c`,
        theme_color: `#0d518c`,
        display: `minimal-ui`,
        icon: `static/assets/logos/logo.png`,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-xxx",
        head: true,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-dark-mode`
  ],
}
