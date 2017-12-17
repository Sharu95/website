/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { ABOUT_ME } from "../../constants";

class About extends Component<*, *> {
  render() {
    return (
      <div className="about-view">
        { ABOUT_ME.DESCRIPTION }
      </div>
    );
  }
}

export default About;
