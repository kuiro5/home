import React from 'react';
import ListItem from '../ListItem';
import { Link } from 'gatsby';

const Photos = () => {
  return (
    <div>
      <ListItem>
        <Link to='/photos/bali'>
          Bali
        </Link>
      </ListItem>
      <ListItem>
        <Link to='/photos/thailand'>
          Thailand
        </Link>
      </ListItem>
    </div>
  );
};

export default Photos;

