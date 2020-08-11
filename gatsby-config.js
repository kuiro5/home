const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_KEY_ID
});

module.exports = {
  siteMetadata: {
    title: "Josh Kuiros",
    siteUrl: `https://www.kuiros.io`,
    description:
      "I'm a full stack engineer living and working in San Francisco. I enjoy building things using React, Ruby, and Go. When I'm not coding, you can find me cycling around the Bay Area."
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-prismjs"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography"
      }
    },
    {
      resolve: "gatsby-source-s3-image",
      options: {
        bucketName: "kuiros-io-photos",
        region: "us-west-2",
        protocol: "https"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/img/icon-wide.png`
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-purgecss", // must be after other CSS plugins
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
