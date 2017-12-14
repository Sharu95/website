/* @flow */
import React, { Component } from 'react';

import './App.css';
import MainView from './components/MainView'
import Sidebar from './components/Sidebar'

class App extends Component<*,*> {
  
  selectedOption = (identifier: string) => () => {
    alert('Clicked '+identifier);
  }

  render() {
    return (
      <div className="app-layout">
        <Sidebar selected={this.selectedOption}/>
        {/* <MainView /> */}
      </div>
    );
  }
}

export default App;
