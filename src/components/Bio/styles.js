import styled from 'styled-components';
import LinkButton from '../LinkButton';
import Img from 'gatsby-image';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const BioImg = styled(Img)`
  border-radius: 50px;
  width: 100px;
  margin-right: .8rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-bottom: 0rem;
`;

export const BioMsg = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BioButton = styled(LinkButton)`
  margin-left: .5rem;
  display: inline;
`;
