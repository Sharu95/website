/* @flow */
import React, { Component } from 'react';

import './App.css';
import MainView from './components/MainView';
import Sidebar from './components/Sidebar';
import { CONSTANTS, ROOT } from './constants';

type State = {
  identifier: string,
  device: string, 
}

class App extends Component<*,State> {
  // state = {
  //   identifier: CONSTANTS.DEFAULT_LANDING,
  // }
  
  constructor(props: Object) {
    super(props);
    const width = window.innerWidth;
    const defaultState = {
      identifier: CONSTANTS.DEFAULT_LANDING,
      device: "",
    }

    console.log('width of window', width);
    
    if (width <= 768) {
      defaultState.identifier = "front";
      defaultState.device = "mobile";
    }

    this.state = defaultState;
  }

  selectedOption = (identifier: string) => () => {
    this.setState({identifier: identifier});
  }

  populateUserView = (identifier: string) => {
    return(
      <div className="sidebar-and-view">
        <Sidebar selected={this.selectedOption}/>
        <MainView identifier={identifier}/>
      </div>
    );
  }

  render() {
    const { identifier, device } = this.state; 

    console.log(identifier, device);
    return(
      <div className="app-layout">
        { device === "mobile" && identifier === "front" && <Sidebar selected={this.selectedOption}/> }
        { device === "" && identifier !== "front" && this.populateUserView(identifier) }
        { device === "mobile" && <MainView identifier={identifier}/> }
      </div>
    );
  }
}

export default App;
