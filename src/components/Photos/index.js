import React from "react";
import ListItem from "../ListItem";
import { Link } from "gatsby";

const Photos = () => {
  return (
    <div>
      <ListItem>
        <Link to="/photos/bali">Bali</Link>
      </ListItem>
      <ListItem>
        <Link to="/photos/joshua-tree">Joshua Tree</Link>
      </ListItem>
      <ListItem>
        <Link to="/photos/mendocino">Mendocino</Link>
      </ListItem>
    </div>
  );
};

export default Photos;
