module.exports = {
  plugins: [
    "gatsby-plugin-sass", {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:300,600`]
      }
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-tracking-id-here>",
        head: true
      }
    }
  ], {
    pathPrefix: "/johntzan-site"
  },
  siteMetadata: {
    title: "John Tzanidakis",
    description: "Mobile & Web Developer",
    keywords: "mobile, full stack, developer, engineer, android, portfolio, personal website",
    url: "https://www.johntzan.com"
  }
};
