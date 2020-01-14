import React from 'react';
import classNames from 'classnames';
import { Container, Link } from './styles';

const LinkButton = ({ className, path, children }) => {
  return (
    <Container className={className}>
      <Link to={path}>{children}</Link>
    </Container>
  );
};

export default LinkButton;
