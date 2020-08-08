import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Greeting from "../components/Greeting";
import PostsPreview from "../components/PostsPreview";
import Projects from "../components/Projects";
import Places from "../components/Places";
import Talks from "../components/Talks";
import {
  Section,
  SectionHeading,
  SectionHeadingButton,
  SectionHeadingButtonContainer
} from "../styles";
require("prismjs/themes/prism.css");

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const {
      allMarkdownRemark: { edges: posts },
      file
    } = data;

    return (
      <Layout showLinkHome={false}>
        <div style={{ marginBottom: "2rem" }}>
          <Greeting />
          <Bio bioImg={file} />
          <Section>
            <SectionHeadingButtonContainer>
              <SectionHeading>Words</SectionHeading>
              <SectionHeadingButton path="/words">All</SectionHeadingButton>
            </SectionHeadingButtonContainer>
            <PostsPreview posts={posts.slice(0, 3)} />
          </Section>
          <Section>
            <SectionHeadingButtonContainer>
              <SectionHeading>Code</SectionHeading>
              <SectionHeadingButton path="/code-analytics">
                Analytics
              </SectionHeadingButton>
            </SectionHeadingButtonContainer>
            <Projects />
          </Section>
          <Section>
            <SectionHeading>Places</SectionHeading>
            <Places />
          </Section>
          {/* <Section>
              <SectionHeading>Talks</SectionHeading>
              <Talks />
            </Section> */}
        </div>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
