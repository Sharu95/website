/* @flow */
import React, { Component } from 'react';

import './styles/index.css';
import Projects from '../Projects';
import About from '../About';
import { CATEGORIES } from '../../constants';

type Props = {
  identifier?: string, 
}

type State = {
  alreadyRendered: boolean,
}

class MainView extends Component<Props,State> {
  
  state = {
    alreadyRendered: false, 
  }

  hasRenderedCallback = () => {
    this.setState({ alreadyRendered: true });
  }

  render() {
    const { alreadyRendered } = this.state; 

    return (
      <div className="mainview-container-style">
        {this.props.identifier === CATEGORIES.PROJECTS && <Projects animate={!alreadyRendered} rendered={this.hasRenderedCallback} />}
        {this.props.identifier === CATEGORIES.BLOG && this.props.identifier}
        {this.props.identifier === CATEGORIES.ABOUT && <About />}
      </div>
    );
  }
}

export default MainView;
