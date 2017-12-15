/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { PROJECTS, type Project} from "../../constants";
import Card from '../Card';

class Projects extends Component<*, *> {
  
  populateCards = () => {
    let delay = 0;

    return PROJECTS.map( (project: Project, i: number) => {
      delay += 0.2;
      return (
        <Card key={i} content={project} delay={delay}/>
      )
    });    
  }

  render() {
    return (
      <div className="project-view">
        { this.populateCards() }
      </div>
    );
  }
}

export default Projects;
