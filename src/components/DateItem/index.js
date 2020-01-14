import React from 'react';
import { Container, Heading } from './styles';

const DateItem = ({ children, date }) => {
  return (
    <Container>
      <Heading>
        {children}
      </Heading>
      <small>{date}</small>
    </Container>
  )
};

export default DateItem;
