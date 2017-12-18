/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { ABOUT_ME } from "../../constants";

const TagContainer = (props: Object) => {
	return(
		<div>
			<h2 className="about-title"> { props.subtitle } </h2>
			{props.tags.map( (skill, i) => (
				<div key={i} className="about-tag">
					{ skill }
				</div>
			))}
		</div>
	);
};

const Description = (props: Object) => {
	return(
		<div>
			<h2 className="about-title"> About </h2>
			<div className="about-description"> {ABOUT_ME.DESCRIPTION } </div>
		</div>
	);
};

const Languages = (props: Object) => {
	return(
		<div>
			<h2 className="about-title"> This guy speaks </h2>
			{props.content.map( (lang, i) => (
				<div key={i} className="about-tag">
					<span> { lang.emoji } </span>
					<span> { lang.language } </span>
				</div>
			))}
		</div>
	);
}

/* TODO: Fix scrolling navbar under menu button not over */
class About extends Component<*, *> {
  render() {
    return (
      <div className="about-view">
        <h1 className="about-title"> { ABOUT_ME.TITLE } </h1>
        <TagContainer subtitle={"Skills"} tags={ABOUT_ME.TECH_SKILLS} />
        <TagContainer subtitle={"Interests"} tags={ABOUT_ME.INTERESTS} />
				<Languages content={ABOUT_ME.SPEAKS} />
        <Description />
      </div>
    );
  }
}

export default About;
