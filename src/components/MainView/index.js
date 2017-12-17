/* @flow */
import React, { Component } from 'react';

import './styles/index.css';
import Projects from '../Projects';

import { CATEGORIES } from '../../constants';

type Props = {
  identifier?: string, 
}

class MainView extends Component<Props,*> {
  render() {
    return (
      <div className="mainview-container-style">
        {this.props.identifier === CATEGORIES.PROJECTS && <Projects />}
        {this.props.identifier === CATEGORIES.BLOG && this.props.identifier}
        {this.props.identifier === CATEGORIES.ABOUT && this.props.identifier}
      </div>
    );
  }
}

export default MainView;
