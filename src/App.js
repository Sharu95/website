/* @flow */
import React, { Component } from 'react';

import './styles/App.css';
import MainView from './components/MainView';
import Sidebar from './components/Sidebar';
import { CONSTANTS, ROOT } from './constants';
import { MenuButton, MobileMenu } from './components/Menu';

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
    this.setState({ menuOpened: open });
  };

  populateUserView = (identifier: string) => {
    return(
      <div className="sidebar-and-view">
        <Sidebar selected={this.selectedOption} handler={this.handleMenuSmallDevice} />
        <MainView identifier={identifier}/>
      </div>
    );
  }

  render() {
    const { identifier, device, menuOpened } = this.state; 

    console.log(identifier, device);

    const showMenu = {
      transform: "",
    };

    if (device === "mobile") {
      showMenu.transform = menuOpened ? "translateY(0)" : "translateY(-100%)";
    }
    return(
      <div className="app-layout">      
        <div className="app-container" style={showMenu}>
          <MobileMenu 
            closeMenu={this.handleMenuSmallDevice(false)} 
            selected={this.selectedOption} />
            
          <div className="app-view-container">
            { device === "mobile" && identifier !== "front" && <Menu handler={this.handleMenuSmallDevice(true)}/> }
            { device === "mobile" && identifier === "front" && <Sidebar selected={this.selectedOption} handler={this.handleMenuSmallDevice}/> }
            { device === "" && identifier !== "front" && this.populateUserView(identifier) }
            { device === "mobile" && <MainView identifier={identifier}/> }
          </div>
        </div>

      </div>
    );
  }
}

export default App;
