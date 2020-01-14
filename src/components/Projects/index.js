import React from 'react';
import ListItem from '../ListItem';

const Projects = () => {
  return (
    <div>
      <ListItem>
        <a href='https://www.datagrail.io' target='_blank' rel='noopener noreferrer'>
          DataGrail</a>: data compliance as a service
      </ListItem>
      <ListItem>
        <a href='https://elated-wescoff-9c25f1.netlify.com' target='_blank' rel='noopener noreferrer'>
          Wedding Website</a>: info for the big day
      </ListItem>
      <ListItem>
        <a href='https://www.marketo.com/software/marketo-sales-connect' target='_blank' rel='noopener noreferrer'>
          ToutApp</a>: workflow tool for sales teams
      </ListItem>
      {/*
      <ListItem>
        <a href='/review-please' target='_blank'>
          Review Please</a>: slack bot for github pull requests
      </ListItem>
      */}
      <ListItem>
        <a href='https://www.ciscospark.com' target='_blank' rel='noopener noreferrer'>
          Cisco Spark</a>: enterprise messaging platform
      </ListItem>
      <ListItem>
        <a href='https://www.energy.gov/articles/energy-efficient-buildings-hub' target='_blank' rel='noopener noreferrer'>
          EEBHub</a>: open source tool to simulate building energy
      </ListItem>
    </div>

  );
};

export default Projects;
