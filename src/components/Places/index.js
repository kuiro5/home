import React from 'react';
import ListItem from '../ListItem';
import { Link } from 'gatsby';

const Places = () => {
  return (
    <div>
      <ListItem>
        <Link to='/places/san-francisco'>
          San Francisco
        </Link>
      </ListItem>
    </div>
  );
};

export default Places;
