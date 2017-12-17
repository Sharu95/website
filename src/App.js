/* @flow */
import React, { Component } from 'react';

import './styles/App.css';
import MainView from './components/MainView';
import Sidebar from './components/Sidebar';
import { CONSTANTS, ROOT } from './constants';
import { MenuButton } from './components/Menu';

type State = {
  identifier: string,
  device: string, 
  menuOpened: boolean,
}

const Menu = (props: Object) => {
  return(
    <div className="app-mobile-navbar">
      <MenuButton handler={props.handler}/>
    </div>
  );
};

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
      menuOpened: false,
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

  handleMenuSmallDevice = (open: boolean) => () => {
    alert("clicked");
    this.setState({ menuOpened: open });
  };

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
        { device === "mobile" && identifier !== "front" && <Menu handler={this.handleMenuSmallDevice(true)}/> }
        { device === "mobile" && identifier === "front" && <Sidebar selected={this.selectedOption}/> }
        { device === "" && identifier !== "front" && this.populateUserView(identifier) }
        { device === "mobile" && <MainView identifier={identifier}/> }
      </div>
    );
  }
}

export default App;
