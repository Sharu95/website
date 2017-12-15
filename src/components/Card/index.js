/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { type Project } from "../../constants";

type Props = {
  content: Project
};

class Card extends Component<*, *> {
  render() {
		console.log('Project', this.props.content);

    return (
      <div className="card-item">
				<div className="card-title"> {this.props.content.title} </div>
				<div className="card-divider" />
				<div className="card-description"> {this.props.content.description} </div>
      </div>
    );
  }
}

export default Card;
