import React from "react";
import ListItem from "../ListItem";

const Projects = () => {
  return (
    <div>
      <ListItem>
        <a
          href="https://www.heyoutline.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Outline
        </a>
        : Community operating system
      </ListItem>
      <ListItem>
        <a
          href="https://www.datagrail.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          DataGrail
        </a>
        : Data compliance as a service
      </ListItem>
      <ListItem>
        <a
          href="https://joshplusrach.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wedding
        </a>
        : Info for the big day
      </ListItem>
      <ListItem>
        <a
          href="https://github.com/kuiro5/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home
        </a>
        : Code for this website
      </ListItem>
      <ListItem>
        <a
          href="https://www.marketo.com/software/marketo-sales-connect"
          target="_blank"
          rel="noopener noreferrer"
        >
          ToutApp
        </a>
        : Workflow tool for sales teams
      </ListItem>
      {/*
      <ListItem>
        <a href='/review-please' target='_blank'>
          Review Please</a>: slack bot for github pull requests
      </ListItem>
      */}
      <ListItem>
        <a
          href="https://www.ciscospark.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cisco Spark
        </a>
        : Enterprise messaging platform
      </ListItem>
      <ListItem>
        <a
          href="https://www.energy.gov/articles/energy-efficient-buildings-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          EEBHub
        </a>
        : Open source tool to simulate building energy
      </ListItem>
    </div>
  );
};

export default Projects;
