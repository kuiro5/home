import styled from "styled-components";
import { Link as LinkBase } from "gatsby";

export const ListItem = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

export const Date = styled.div`
  margin-right: 2rem;
  flex-shrink: 0;
`;

export const Link = styled(LinkBase)``;
