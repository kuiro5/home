import React from "react";
import { graphql } from "gatsby";

const PhotoTemplate = props => {
  console.log(props);
  return <h1>hello, world</h1>;
};

export const pageQuery = graphql`
  query PhotosByKey($keyRegex: String!) {
    allS3ImageAsset(filter: { Key: { regex: $keyRegex } }) {
      edges {
        node {
          id
          Key
        }
      }
    }
  }
`;

export default PhotoTemplate;
