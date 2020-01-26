import React from 'react';
import { Link } from 'gatsby';
import mePicImgSrc from '../../img/me.png';
import Img from 'gatsby-image';
import { Container, BioImg, BioMsg, BioButton } from './styles';

class Bio extends React.Component {
  render() {
    const { bioImg } = this.props;
    return (
      <Container>
        <Img
          style={{
            borderRadius: '50px',
            marginRight: '.8rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            marginBottom: '0rem',
            flexShrink: '0',

          }}
          fixed={bioImg.childImageSharp.fixed}
        />
        <div>
          <BioMsg>
            <div>
              I'm an Engineering Manager living and working in San Francisco. I'm passionate about building human-centered software and strong engineering cultures. Outside of code, you can find me cycling around the Bay Area.
              <BioButton path='/me'>More</BioButton>
            </div>
          </BioMsg>
        </div>
      </Container>
    )
  }
}

export default Bio;

