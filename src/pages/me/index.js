import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Layout from '../../components/Layout'

const MeImg = styled(Img)`
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  margin-bottom: 1.5rem;
  flex-shrink: 0;
`;

const Me = ({ data }) => {
  const { file: bioImg } = data;

  return (
    <Layout>
      <h2>About</h2>
      <div style={{ textAlign: 'center' }}>
        <MeImg
          fixed={bioImg.childImageSharp.fixed}
        />
      </div>
      <p>
       I'm an Engineering Manager living and working in San Francisco. I'm passionate about building human-centered software and strong engineering cultures.
      </p>
      <p>
        In the past, I've led teams and shipped products at small startups and Fortune 500 companies. I'm currently spending my days managing the Product Engineering team at <a href='https://www.datagrail.io'>DataGrail</a> where we help to improve data privacy for companies and their users.
      </p>
      <div style={{ marginBottom: '.725rem' }}>
        Outside of code, I spend my time:
      </div>
      <ul>
        <li>Cycling around San Francisco and Marin</li>
        <li>Taking photos</li>
        <li><a href='https://www.goodreads.com/kuiro5' target='_blank' rel='noopener noreferrer'>Reading books</a>, mostly computing, philosophy, cognitive science, and science fiction</li>
        <li>Hiking, camping, and traveling</li>
      </ul>
      <div style={{ marginBottom: '.725rem' }}>
        You can find me elsewhere on the internet at:
      </div>
      <ul>
        <li>josh@kuiros.io</li>
        <li><a href='https://www.twitter.com/kuiro5' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
        <li><a href='https://www.github.com/kuiro5' target='_blank' rel='noopener noreferrer'>Github</a></li>
        <li><a href='https://www.pinboard.in/u:kuiro5' target='_blank' rel='noopener noreferrer'>Pinboard</a></li>
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query MeQuery {
    file(relativePath: { eq: "me.png" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Me;
