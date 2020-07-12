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
    </Helmet>
  );
};

export default SEO;
