import React from 'react';
import { Link } from 'gatsby';
import tagToEmoji from '../../utils/tagToEmoji';

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map(({ node: post }) => (
        <div
          className="content"
          key={post.id}
        >
          <h3>
            <Link className="has-text-primary" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
          </h3>
          <p>
            {post.frontmatter.date}
          </p>
          <p>
            {post.excerpt}
            <br />
            <br />
          </p>
        </div>
      ))}
    </div>
  )
};

export default Posts;
