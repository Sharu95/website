/* @flow */
import React, { Component } from "react";

import "./styles/App.css";
import MainView from "./components/MainView";
import Sidebar from "./components/Sidebar";
import { CONSTANTS, ROOT } from "./constants";
import { MenuButton as MobileMenuButton, MobileMenu } from "./components/Menu";

type State = {
  landingPage: string,
  deviceIsMobile: boolean,
  menuOpened: boolean
};

const MenuButton = (props: Object) => {
  return (
    <div className="app-mobile-navbar">
      <MobileMenuButton handler={props.handler} />
    </div>
  );
};

class App extends Component<*, State> {
  constructor(props: Object) {
    super(props);
    const width = window.innerWidth;
    const defaultState = {
      landingPage: CONSTANTS.DEFAULT_LANDING,
      deviceIsMobile: false,
      menuOpened: false
    };

    console.log("width of window", width);

    if (width <= 768) {
      defaultState.landingPage = "";
      defaultState.deviceIsMobile = true;
    }

    this.state = defaultState;
  }

  selectedOption = (identifier: string) => () => {
    this.setState({ landingPage: identifier });
  };

  handleMenuSmallDevice = (open: boolean) => () => {
    this.setState({ menuOpened: open });
  };

  populateUserView = (identifier: string, isMobile: boolean) => {
    return isMobile ? (
      <MainView identifier={identifier} />
    ) : (
      <div className="sidebar-and-view">
        <Sidebar
          selected={this.selectedOption}
          handler={this.handleMenuSmallDevice}
        />
        <MainView identifier={identifier} />
      </div>
    );
  };

  render() {
    const { landingPage, deviceIsMobile, menuOpened } = this.state;
    const showMenu = { transform: "" };
    if (deviceIsMobile) {
      showMenu.transform = menuOpened ? "translateY(0)" : "translateY(-100%)";
    }
    const backgroundColor = deviceIsMobile ? { backgroundColor: "rgba(0,0,0, .4)" } : {};

    return (
      <div className="app-layout">
        <div className="app-container" style={showMenu}>
          <MobileMenu
            closeMenu={this.handleMenuSmallDevice(false)}
            selected={this.selectedOption}
          />

          <div className="app-view-container" style={backgroundColor}>
            {deviceIsMobile && (
              <MenuButton handler={this.handleMenuSmallDevice(true)} />
            )}
            {landingPage === "" && (
              <Sidebar
                selected={this.selectedOption}
                handler={this.handleMenuSmallDevice}
              />
            )}
            {this.populateUserView(landingPage, deviceIsMobile)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
