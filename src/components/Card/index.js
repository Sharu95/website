/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { type Project } from "../../constants";

type Props = {
  content: Project
};

class Card extends Component<*, *> {
  render() {
		console.log('Project', this.props.content);
		const animation = {
			animation: "slideInRight 0.8s",
		};

    return (
			<div className="card-item" style={animation}>
				<div className="card-title"> {this.props.content.title} </div>
				<div className="card-divider" />
					<div className="card-description"> {this.props.content.description} </div>
					
					{/* <section className="card-buttons"> */}
						{/* b1 b2 */}
						{/* <span className="button view-source"> View source </span>
						<span className="button view-demo"> Demo </span> */}
					{/* </section> */}

			</div>
    );
  }
}

export default Card;
