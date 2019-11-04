module.exports = {
  siteMetadata: {
    title: 'JB',
    description: 'Josh Buchea',
    siteUrl: 'https://joshbuchea.com'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-theme-jxnblk',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto Mono'
        ]
      }
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-33680175-1'
      }
    },
  ]
}
