import React from "react";
import { Link } from "gatsby";
import DateItem from "../DateItem";
import PostListItem from "../PostListItem";

const PostsPreview = ({ posts }) => {
  return (
    <div>
      {posts.map(
        ({
          node: {
            id,
            frontmatter: { date, title },
            fields: { slug }
          }
        }) => (
          <PostListItem date={date} title={title} to={slug} />
        )
      )}
    </div>
  );
};

export default PostsPreview;
