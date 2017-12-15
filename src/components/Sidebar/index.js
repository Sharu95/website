/* @flow */
import React, { Component } from 'react';

import './styles/index.css';
import './styles/profile.css';
import './styles/options.css';
import './styles/contact.css';
import './styles/menu.css';

import { CONSTANTS, CATEGORIES, ROOT } from '../../constants.js';

const Option = (props: Object) => {
  return(
    <div onClick={props.selected} className="sidebar-option">
      <p id="sidebar-option-text"> {props.title} </p>
    </div>
  );
};

const LinkOption = (props: Object) => {
  return (
    <a className="sidebar-option-contact-item" href={props.link}> 
      <i className={`fa fa-2x `+props.icon} aria-hidden="true"></i> 
    </a>
  );
};

const Menu = (props: Object) => {
  return(
    <div className={`sidebar-dropdown-menu ` + props.open}>
      OK
    </div>
  );
};

type Props = {
  selected: (identifier: string) => () => void
} 

type State = {
  menuOpened: string | boolean,
}

class Sidebar extends Component<Props, State> {
  state = {
    menuOpened: false,
  }

  openMenuSmallDevice = () => {
    const newValue = this.state.menuOpened ? false : true;
    
    console.log('Status: ', newValue);

    this.setState({menuOpened: newValue});
  }

  render() {
    const { menuOpened } = this.state;
    
    const animation = {
			animation: "slideInLeft 0.8s",
    };
    
    console.log("SIDEBAR ROOT", ROOT); 
    return (
      <div className="sidebar-style" style={animation}>
        <div onClick={this.openMenuSmallDevice} className="sidebar-menu-button">
          <span className="menu-dot" />
          <span className="menu-dot" />
          <span className="menu-dot" />
        </div>

        {/* {menuOpened && <Menu open={"collapsed-menu"}/>} */}

        {/* <div className="show-sidebar hide-sidebar"> */}
          <div className="profile-container">
            <div className="profile-picture" />
            <p>Sharanan Kulam</p>
          </div>
          
          <div className="sidebar-split"/>
          
          <div className="sidebar-options-container">
            <Option selected={this.props.selected(CATEGORIES.PROJECTS)} title="Projects" />
            <Option selected={this.props.selected(CATEGORIES.BLOG)} title="Blog" />
            <Option selected={this.props.selected(CATEGORIES.ABOUT)} title="About me" />
          </div>

          <div className="sidebar-options-contact-container">
            <LinkOption link={CONSTANTS.LINKEDIN} icon="fa-linkedin" />
            <LinkOption link={CONSTANTS.GITHUB} icon="fa-github" />
            <LinkOption link={CONSTANTS.TWITTER} icon="fa-twitter" />
            <LinkOption link={CONSTANTS.EMAIL} icon="fa-envelope" />
          </div>

        {/* </div> */}

      </div>
    );
  }
}

export default Sidebar;
