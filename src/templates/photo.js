import React from "react";
import { graphql } from "gatsby";
import Photo from "../components/Photo";
import Layout from "../components/Layout";
import styled from "styled-components";

const Title = styled.h1`
  text-transform: capitalize;
`;

const PhotoTemplate = props => {
  const {
    data: {
      allS3ImageAsset: { edges }
    },
    path
  } = props;
  const title = path
    .split("/")
    .pop()
    .replace("-", " ");

  return (
    <Layout>
      <Title>{title}</Title>
      {edges.map(
        ({
          node: {
            childImageSharp: { largeSizes }
          }
        }) => {
          return <Photo fluid={largeSizes} />;
        }
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query PhotosByKey($keyRegex: String!) {
    allS3ImageAsset(filter: { Key: { regex: $keyRegex } }) {
      edges {
        node {
          id
          Key
          EXIF {
            DateCreatedISO
            ExposureTime
            FNumber
            ShutterSpeedValue
          }
          childImageSharp {
            original {
              height
              width
            }
            thumbnailSizes: fluid(maxWidth: 256) {
              aspectRatio
              src
              srcSet
              sizes
            }
            largeSizes: fluid(maxWidth: 1024) {
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`;

export default PhotoTemplate;
