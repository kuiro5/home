import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../../components/Layout";

const MeImg = styled(Img)`
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-bottom: 1.5rem;
  flex-shrink: 0;
`;

const Me = ({ data }) => {
  const { file: bioImg } = data;

  return (
    <Layout>
      <h2>About</h2>
      <div style={{ textAlign: "center" }}>
        <MeImg fixed={bioImg.childImageSharp.fixed} />
      </div>
      <h3>Hi, I'm Josh.</h3>
      <p>
        I believe in making tools that improve the way people work and create.
      </p>
      <p>
        I grew up in The Steel City, Pittsburgh, PA. My parents owned a local
        candy shop growing up. They were gracious enough to let me help them
        with their website; my first foray into entrepreneurship and
        “programming.”
      </p>
      <p>
        I went on to study Computer Engineering and Spanish at Penn State. I
        took a class on iOS development that dropped me down the rabbit hold of
        application development, ultimately discovering The Web along the way.
      </p>
      <p>
        After graduation, I headed out west to the Bay Area to work at Cisco. I
        landed in an organization that was comprised of prior startup
        acquisitions. We worked on the next generation of Webex, now Webex
        Teams. I learned a lot about Silicon Valley engineering culture and
        developing software at scale.
      </p>
      <p>
        Surrendering to the startup itch, I went on to work at ToutApp at the
        time they were 30 people and had just raised a Series B from investors
        like a16z. We shipped a lot of products and helped shape the now $3B
        sales software category. I spent a few years leading one of the
        engineering teams before ultimately being acquired by Marketo.
      </p>
      <p>
        After a year of integrating ToutApp and Marketo and launching publicly,
        I took a short period of time off to sleep, cycle, read figure out what
        was next.
      </p>
      <p>
        Deciding I wanted to downsize, I joined the founding team at DataGrail.
        I went on to manage the engineering team, where we implemented some of
        the earliest software to automate data privacy regulations like GDPR and
        CCPA.
      </p>
      <p>
        I’m now spending my days as CTO and Co-founder of Outline, where we're
        helping teams capture and quantify the voice of their customers in order
        to build better relationships, make better business decisions, and build
        better products.
      </p>
      <p></p>
      <p></p>
      <div style={{ marginBottom: ".725rem" }}>
        You can find me elsewhere on the internet at:
      </div>
      <ul>
        <li>josh [at] kuiros [dot] io</li>
        <li>
          <a
            href="https://www.twitter.com/kuiro5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/kuiro5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.pinboard.in/u:kuiro5"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pinboard
          </a>
        </li>
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
