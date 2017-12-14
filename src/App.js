/* @flow */
import React, { Component } from 'react';

import './App.css';
import MainView from './components/MainView'
import Sidebar from './components/Sidebar'

type State = {
  identifier: string, 
}

class App extends Component<*,State> {
  state = {
    identifier: '',
  }
  
  selectedOption = (identifier: string) => () => {
    this.setState({identifier: identifier});
  }

  render() {
    const { identifier } = this.state; 
    return (
      <div className="app-layout">
        <Sidebar selected={this.selectedOption}/>
        <MainView identifier={identifier}/>
      </div>
    );
  }
}

export default App;
