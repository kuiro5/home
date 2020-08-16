import styled from "styled-components";
import LinkButton from "../components/LinkButton";

export const Section = styled.div`
  margin-top 3rem;
  margin-bottom: 0.5rem;
`;

export const SectionHeading = styled.h2`
  margin-bottom: 0rem;
`;

export const SectionHeadingButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SectionHeadingButton = styled(LinkButton)`
  margin-left: 0.5rem;
`;
