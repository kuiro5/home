import React from "react";
import { Link, ListItem, Date } from "./styles";

const PostListItem = ({ date, title, to }) => {
  return (
    <ListItem>
      <Date>{date}</Date>
      <Link to={to}>{title}</Link>
    </ListItem>
  );
};

export default PostListItem;
