import React, { Component } from "react";
import { Link } from "gatsby";
import mePicImgSrc from "../../img/me.png";
import { Container, BioImg, BioMsg, BioButton } from "./styles";

const Bio = ({ bioImg, showName }) => {
  return (
    <Container>
      <BioImg fixed={bioImg.childImageSharp.fixed} />
      <div>
        <BioMsg>
          {showName && (
            <div style={{ fontWeight: "bold", marginBottom: ".5rem" }}>
              Josh Kuiros
            </div>
          )}
          <div>
            I'm the CTO of Outline, based in San Francisco. I'm passionate about
            building human-centered software and strong engineering teams.
            Outside of code, you can find me cycling around the Bay Area.
            <BioButton path="/me">More</BioButton>
            <BioButton path="/now">Now</BioButton>
          </div>
        </BioMsg>
      </div>
    </Container>
  );
};

export default Bio;
