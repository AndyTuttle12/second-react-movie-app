import React, { Component } from 'react';

class DiscoverButton extends Component{
	handleButtonClickChild(apiLink) {
		// console.log(apiLink);
		this.props.functionFromParent(apiLink);
	}

	render(){
		const apiLink = this.props.buttonLink;
		const buttonText = this.props.buttonText;
		return(
			<button className="btn btn-primary" onClick={() => {this.handleButtonClickChild(apiLink)}}>
				{buttonText}
			</button>
		)
	}
}

export default DiscoverButton;