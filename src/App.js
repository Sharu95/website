/* @flow */
import React, { Component } from 'react';

import './App.css';
import MainView from './components/MainView';
import Sidebar from './components/Sidebar';
import { CONSTANTS } from './constants';

type State = {
  identifier: string, 
}

class App extends Component<*,State> {
  state = {
    identifier: CONSTANTS.DEFAULT_LANDING,
  }
  
  selectedOption = (identifier: string) => () => {
    this.setState({identifier: identifier});
  }

  render() {
    const { identifier } = this.state; 
    
    console.log('process.env', );
    
    return (
      <div className="app-layout">
        <Sidebar selected={this.selectedOption}/>
        <MainView identifier={identifier}/>
      </div>
    );
  }
}

export default App;
