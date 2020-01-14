import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import PostsList from '../../components/Posts';
import { Link, graphql } from 'gatsby';

const Posts = (props) => {
  const { data: { allMarkdownRemark: { edges: posts } } } = props;

  return (
    <Layout>
      <h3>{'Blog'}</h3>
      <PostsList posts={posts} />
    </Layout>
  )
};

Posts.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
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
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
export default Posts;
