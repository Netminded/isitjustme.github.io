module.exports = {
  siteMetadata: {
    title: `Is It Just Me? | Monitor Your Wi-Fi Health with Ease`,
    shortTitle: `IIJM?`,
    siteUrl: `https://isitjustme.online`,
    titleTemplate: `%s | Is It Just Me?`,
    description:
      `Install the "Is It Just Me?" Chrome extension to monitor your Wi-Fi health in real-time. Join your community and instantly know if others are facing the same issues. Free and easy to use!`,
    image: `/is-it-just-me-og-image.jpg`,
    keywords: `Wi-Fi monitor, Chrome extension, Wi-Fi health check, community Internet monitor, real-time Internet status, check if others are offline, connection issues, free Chrome tool, free Internet monitor, Is It Just Me Online?`,
    appleTouchIcon: `/apple-touch-icon.png`,
    socials: [
      {
        url: `https://facebook.com`,
      },
      {
        url: `https://www.instagram.com/isitjustme.online/`,
      },
      {
        url: `https://x.com/isitjustmeonln`,
      },
    ]
  },
  plugins: [ 
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: `Is It Just Me?`,
                short_name: `Is It Just Me?`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                lang: `en`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                cache_busting_mode: `query`,
              },
            },
            "gatsby-plugin-react-helmet", 
            "gatsby-plugin-sitemap", 
            "gatsby-plugin-image",
            "gatsby-plugin-sharp", 
            "gatsby-transformer-sharp", 
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                  "name": "images",
                  "path": "./src/images/"
                },
                __key: "images"
            },
            {
              resolve: `gatsby-plugin-google-fonts`,
              options: {
                fonts: [
                  `poppins\:400,500,600,700`,
                  `karla\:400,500`,
                  `calistoga\:400`
                ],
                display: 'swap'
              }
            },
            "gatsby-plugin-fontawesome-css",
            {
              resolve: `gatsby-plugin-gdpr-cookies`,
              options: {
                googleAnalytics: {
                  trackingId: '',
                  cookieName: 'gatsby-gdpr-google-analytics',
                  anonymize: true,
                  allowAdFeatures: false
                },
                environments: ['production']
              },
            },
        ]
};