import React, { Component } from "react";
import { CATEGORIES } from "../../constants.js";
import "./styles/index.css";

const Option = (props: Object) => {
  return (
    <div onClick={props.selected} className="menu-option">
      <p> {props.title} </p>
      <div className="option-mobile-divider" />
    </div>
  );
};

export function Categories (props: Object) {
  return(
   <div>
      <Option
        selected={props.selected(CATEGORIES.PROJECTS)}
        title={CATEGORIES.TITLE.PROJECTS}
      />
      <Option
        selected={props.selected(CATEGORIES.BLOG)}
        title={CATEGORIES.TITLE.BLOG}
      />
      <Option
        selected={props.selected(CATEGORIES.ABOUT)}
        title={CATEGORIES.TITLE.ABOUT}
      />
    </div>
  );
};

export function MobileMenu(props: Object) {
  return (
    <div className={`dropdown-menu`}>
      <span onClick={props.closeMenu}>
        <svg
          style={{ margin: "10px" }}
          fill="#FFFFFF"
          height="40"
          viewBox="0 0 24 24"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        <Categories selected={props.selected}/>
      </span>
    </div>
  );
}

export function MenuButton(props: Object) {
  return (
    <div onClick={props.handler} className="menu-button">
      <span className="menu-dot" />
      <span className="menu-dot" />
      <span className="menu-dot" />
    </div>
  );
}
