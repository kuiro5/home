import React from "react";
import Emojis from "react-emoji-component";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { Inner, Outer, Footer, Home } from "./styles";
import Divider from "../Divider";
import SEO from "../SEO";
import "normalize.css";
import "./styles.css";

const TemplateWrapper = ({ children, showLinkHome }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Outer>
        <SEO data={data} />
        <Inner>
          <div>
            {showLinkHome && (
              <Home>
                <Link to="/">⇠ Home</Link>
              </Home>
            )}
            {children}
          </div>
          <div>
            <Divider />
            <Footer>
              <div>
                <Emojis>Made with ☕️ in California</Emojis>
              </div>
              <a href="/rss.xml">RSS</a>
            </Footer>
          </div>
        </Inner>
      </Outer>
    )}
  />
);

TemplateWrapper.defaultProps = {
  showLinkHome: true
};

export default TemplateWrapper;
