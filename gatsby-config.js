const prodPlugins =
  process.env.NODE_ENV !== 'development'
    ? [
        'gatsby-plugin-preact',
        {
          resolve: 'gatsby-plugin-google-analytics',
          options: {
            trackingId: process.env.GA_TRACKING_ID
          }
        }
      ]
    : [];

module.exports = {
  siteMetadata: {
    title: 'gatsby-ts-starter',
    author: 'brvno'
  },
  plugins: [
    ...prodPlugins,
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-typescript',
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-dts-css-modules',
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    // 'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      }
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-extract-schema'
  ]
};
