/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { PROJECTS, type Project} from "../../constants";
import Card from '../Card';

class Projects extends Component<*, *> {
  
  populateCards = () => {
    return PROJECTS.map( (project: Project, i: number) => (
      <Card key={i} content={project} />
    ));    
  }

  render() {
    return (
      <div className="project-view">
        {this.populateCards()}
      </div>
    );
  }
}

export default Projects;
