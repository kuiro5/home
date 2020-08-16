import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import PostsPreview from "../../components/PostsPreview";
import { Link, graphql } from "gatsby";

const Words = props => {
  const {
    data: {
      allMarkdownRemark: { edges: posts }
    }
  } = props;

  return (
    <Layout>
      <h2>{"Words"}</h2>
      <PostsPreview posts={posts} />
    </Layout>
  );
};

Words.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query PostsQuery {
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
            tags
          }
        }
      }
    }
  }
`;
export default Words;
