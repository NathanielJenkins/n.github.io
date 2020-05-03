import React, { Component } from "react";
import Bio from "./Bio";

class Header extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Bio />
			</React.Fragment>
		);
	}
}

export default Header;
