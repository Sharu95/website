/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import "./styles/profile.css";
import "./styles/contact.css";

import { CONSTANTS, CATEGORIES } from "../../constants.js";
import { MenuButton, Categories } from '../Menu';

const LinkOption = (props: Object) => {
    return(
      <a className="feather-icon" href={props.link}>
        <i data-feather={props.icon} aria-hidden="true" />
      </a>
    );
};

type Props = {
  selected: (identifier: string) => () => void,
};

class Sidebar extends Component<Props, *> {
  render() {
    return (
      <div className="sidebar-style">
        <div className="profile-container">
          <div className="profile-picture" />
          <p>Sharanan Kulam</p>
        </div>

        <div className="sidebar-split" />

        <div className="sidebar-options-container">
          <Categories selected={this.props.selected}/>
        </div>

        <div className="sidebar-options-contact-container">
          <LinkOption link={CONSTANTS.LINKEDIN} icon="linkedin" />
          <LinkOption link={CONSTANTS.GITHUB} icon="github" />
          <LinkOption link={CONSTANTS.TWITTER} icon="twitter" />
          <LinkOption link={CONSTANTS.MEDIUM} icon="bookmark" />          
        </div>

      </div>
    );
  }
}

export default Sidebar;
