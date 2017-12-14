/* @flow */
import React, { Component } from 'react';

import './index.css';
import './profile.css';

class Sidebar extends Component<*,*> {
  render() {
    return (
      <div className="sidebar-layout sidebar-style">
        <div className="profile-container">
          <div className="profile-picture"></div>
          <p>Sharanan Kulam</p>
        </div>
        <div className="sidebar-split"/>
        
        <div className="sidebar-options">
          Rest
        </div>

      </div>
    );
  }
}

export default Sidebar;
