import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import ProjectOverview from "./ProjectOverview";
import Education from "./Education";

class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<NavigationBar />
				<Header />
				<ProjectOverview />
				<Education />
			</React.Fragment>
		);
	}
}

export default Home;
