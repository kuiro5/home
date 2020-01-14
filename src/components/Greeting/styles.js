import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem 0rem;
`;

const waveAnimation = keyframes`
  0% { transform: rotate(  12.0deg) }
  10% { transform: rotate(-10.0deg) }
  20% { transform: rotate( 12.0deg) }
  30% { transform: rotate(-10.0deg) }
  40% { transform: rotate( 12.0deg) }
  50% { transform: rotate(-10.0deg) }
  60% { transform: rotate(12.0deg) }
  70% { transform: rotate(-10.0deg) }
  80% { transform: rotate( 12.0deg) }
  90% { transform: rotate(-10.0deg) }
  100% { transform: rotate(12.0deg) }
`;

export const Wave = styled.div`
  display: inline-block;

  &:hover {
    cursor: pointer;
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
  }
`;

