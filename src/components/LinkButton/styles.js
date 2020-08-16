import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  padding: 3px 6px;
  font-size: 0.5rem;

  &:hover {
    color: blue;
    border: 1px solid blue;
  }
`;

export const Link = styled(GatsbyLink)`
  text-decoration: none;
`;
