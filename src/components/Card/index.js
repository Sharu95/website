/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { type Project } from "../../constants";

type Props = {
  content: Project
};

class Card extends Component<Props, *> {

	openLink = (link: string) => () => {
		if (link !== "/") {
			window.open(link);
		}
		else {
			window.location.reload(true);
		}
	}

	render() {
		const styles = {
			animation: "slideInRight 0.8s",
			backgroundImage: `url(${this.props.content.image})`
		};

    return (
			<div className="card-item" style={styles}>
				<div className="card-title card-header"> 
					<span> {this.props.content.title} </span>
					<span className="card-tag" > {this.props.content.tag} </span>
					<div className="card-divider" />
					<section className="card-description">
						{this.props.content.description}
						
						<div className="card-buttons">
							<div onClick={this.openLink(this.props.content.source)} className="card-button"> View source </div>
							<div onClick={this.openLink(this.props.content.demo)} className="card-button"> Demo </div>
						</div>
					</section>
				</div>
			</div>
    );
  }
}

export default Card;
