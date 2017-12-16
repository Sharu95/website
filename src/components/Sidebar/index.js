/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import "./styles/profile.css";
import "./styles/options.css";
import "./styles/contact.css";
import "./styles/menu.css";

import { CONSTANTS, CATEGORIES } from "../../constants.js";

const Option = (props: Object) => {
  return (
    <div onClick={props.selected} className="sidebar-option">
      <p id="sidebar-option-text"> {props.title} </p>
    </div>
  );
};

const LinkOption = (props: Object) => {
  return (
    <a className="sidebar-option-contact-item" href={props.link}>
      <i className={`fa fa-2x ` + props.icon} aria-hidden="true" />
    </a>
  );
};

const Menu = (props: Object) => {
  let styles = {};

  styles = {
    animation: "slideInDown .8s"
  };

  return (
    <div className={`sidebar-dropdown-menu`}>
      <span onClick={props.closeMenu}>
        <svg
          fill="#FFFFFF"
          height="40"
          viewBox="0 0 24 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </span>
    </div>
  );
};

type Props = {
  selected: (identifier: string) => () => void
};

type State = {
  menuOpened: string | boolean
};

class Sidebar extends Component<Props, State> {
  state = {
    menuOpened: false
  };

  handleMenuSmallDevice = (open: boolean) => () => {
    this.setState({ menuOpened: open });
  };

  render() {
    const { menuOpened } = this.state;
    const showMenu = menuOpened
      ? { transform: "translateY(0)" }
      : { transform: "translateY(-100%)" };

    return (
      <div className="menu-container" style={showMenu}>
        <Menu closeMenu={this.handleMenuSmallDevice(false)} />

        <div className={`sidebar-style`}>
          <div
            onClick={this.handleMenuSmallDevice(true)}
            className="sidebar-menu-button">
            <span className="menu-dot" />
            <span className="menu-dot" />
            <span className="menu-dot" />
          </div>

          <div className="profile-container">
            <div className="profile-picture" />
            <p>Sharanan Kulam</p>
          </div>

          <div className="sidebar-split" />

          <div className="sidebar-options-container">
            <Option
              selected={this.props.selected(CATEGORIES.PROJECTS)}
              title="Projects"
            />
            <Option
              selected={this.props.selected(CATEGORIES.BLOG)}
              title="Blog"
            />
            <Option
              selected={this.props.selected(CATEGORIES.ABOUT)}
              title="About me"
            />
          </div>

          <div className="sidebar-options-contact-container">
            <LinkOption link={CONSTANTS.LINKEDIN} icon="fa-linkedin" />
            <LinkOption link={CONSTANTS.GITHUB} icon="fa-github" />
            <LinkOption link={CONSTANTS.TWITTER} icon="fa-twitter" />
            <LinkOption link={CONSTANTS.EMAIL} icon="fa-envelope" />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
