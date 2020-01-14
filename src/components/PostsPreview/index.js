import React from 'react';
import { Link } from 'gatsby'
import DateItem from '../DateItem';

const PostsPreview = ({ posts }) => {
  return (
    <div>
    {posts.map(({ node: post }) => (
        <DateItem key={post.id} date={post.frontmatter.date}>
            <Link className="has-text-primary" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
        </DateItem>
      ))}
    </div>
  );
};

export default PostsPreview;
