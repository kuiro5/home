import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../../components/Navbar'
import './styles.css';

const TemplateWrapper = ({ children, showLinkHome }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div style={{ padding: '2rem 1rem' }}>
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
        <div style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '34.8rem'
        }}>
        {showLinkHome && <div style={{ marginBottom: '1.5rem' }}><Link to='/'>Josh Kuiros</Link></div>}
        {children}
      </div>
      </div>
    )}
  />
)

TemplateWrapper.defaultProps = {
  showLinkHome: true
};

export default TemplateWrapper
