import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import simulation from "./projects/simulation";
import machine from "./projects/machine";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Section scene={simulation} />
				<Section scene={machine} />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
