/* @flow */
import React, { Component } from "react";

import "./styles/index.css";
import { type Project } from "../../constants";

type Props = {
  content: Project,
  delay: number
};

const CardButton = ({ handler, url, text }) => (
  <div
    onClick={handler(url)}
    className="card-button">
    {text}
  </div>
)

class Card extends Component<Props, *> {
  openLink = (link: string) => () => {
    
    if (!link) {
      alert("This is not available or public yet :)")
    }
    else if (link !== "/") {
      window.open(link);
    } 
    else {
      window.location.reload(true);
    }
  };

  render() {
		const styles = {
      animationDelay: `${this.props.delay}s`,
			backgroundImage: `url(${this.props.content.image})`,
			marginTop: "100%",
		};
		
		if (!this.props.animate) {
			styles.marginTop = "10px";
			styles.animationDelay = "";
		}

    const { title, description, source, demo } = this.props.content;

    return (
      <div className="card-item" style={styles}>
        
        <div className="card-content">
          <div className="card-title">{title}</div>

          <div className="card-description">
            <span>{description}</span>
          </div>
          
          <div className="card-buttons">
            <CardButton handler={this.openLink} url={source} text="View source"/>
            <CardButton handler={this.openLink} url={demo} text="Demo"/>
          </div>
          
        </div>

      </div>
    );
  }
}

export default Card;
