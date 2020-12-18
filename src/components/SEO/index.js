import React from "react";
import Helmet from "react-helmet";

const SEO = ({ data }) => {
  return (
    <Helmet>
      <html lang="en" />
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />

      <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
      <meta name="theme-color" content="#fff" />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={data.site.siteMetadata.title} />
      <meta property="og:url" content="/" />
      <meta property="og:image" content="/img/og-image.jpg" />
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "50336a6ac46f42f6bedd70af588973fe"}'
      ></script>
    </Helmet>
  );
};

export default SEO;
