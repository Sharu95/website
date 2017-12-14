/* @flow */
import React, { Component } from 'react';

import './App.css';
import MainView from './components/MainView'
import Sidebar from './components/Sidebar'

class App extends Component<*,*> {
  render() {
    return (
      <div className="app-layout">
        <Sidebar />
        {/* <MainView /> */}
      </div>
    );
  }
}

export default App;
