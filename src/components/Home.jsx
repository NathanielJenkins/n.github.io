import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import ProjectOverview from "./ProjectOverview";

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Header />
				<ProjectOverview />
			</React.Fragment>
		);
	}
}

export default Home;
