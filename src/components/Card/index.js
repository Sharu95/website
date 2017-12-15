/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { type Project } from "../../constants";

type Props = {
  content: Project
};

class Card extends Component<*, *> {
	
	openLink = (link: string) => () => {
		window.open(link);
	}

	render() {
		console.log('Project', this.props.content);
		const styles = {
			animation: "slideInRight 0.8s",
			backgroundImage: `url(${this.props.content.image})`
		};

    return (
			// <div className="card-item" style={animation}>
				<div onClick={this.openLink(this.props.content.demo)} className="card-header" style={styles}>
					<div className="card-header-title card-header-glass"> 
						<span> {this.props.content.title} </span>
						<div className="card-divider" />
						<section className="card-header-description">
							{this.props.content.description}
						</section>
					</div>


					{/* <section className="card-buttons">
						<span className="button view-source"> View source </span>
						<span className="button view-demo"> Demo </span>
					</section> */}

			</div>
    );
  }
}

export default Card;
