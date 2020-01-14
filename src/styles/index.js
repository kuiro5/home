import styled from 'styled-components';
import LinkButton from '../components/LinkButton';

export const Section = styled.div`
  margin-top 3rem;
`;

export const SectionHeading = styled.h2`
  margin-bottom: .5rem;
`;

export const SectionHeadingButtonContainer = styled.div`
  display: flex;
`;

export const SectionHeadingButton = styled(LinkButton)`
  margin-left: .5rem;
  align-self: flex-start;
`;
