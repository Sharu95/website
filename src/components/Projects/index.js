/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { PROJECTS, type Project} from "../../constants";
import Card from '../Card';

type Props = {
  rendered: () => void, 
  animate: boolean, 
}

class Projects extends Component<Props, *> {

  populateCards = () => {
    let delay = 0;

    return PROJECTS.map( (project: Project, i: number) => {
      delay += 0.2;
      return (
        <Card animate={this.props.animate} key={i} content={project} delay={delay} />
      )
    });    
  }

  componentWillUnmount() {
    this.props.rendered();
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
