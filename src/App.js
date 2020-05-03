import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import LyricClassifier from "./components/LyricClassifier";
import Simulation from "./components/Simulation";
import CourseMap from "./components/CourseMap";
import Contact from "./components/Contact";

import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Styled = styled.div`
	h1 {
		font-family: "Helvetica Neue", sans-serif;
		font-size: 54px;
		font-weight: 200;
		letter-spacing: 5px;
	}

	h2 {
		color: #111;
		font-family: "Open Sans", sans-serif;
		font-size: 30px;
		font-weight: 300;
		line-height: 32px;
		margin: 0 0 72px;
		text-align: center;
	}

	p {
		font-family: "Helvetica Neue", sans-serif;
		font-size: 18px;
		line-height: 24px;
		margin: 0 0 24px;
		text-align: justify;
		text-justify: inter-word;
		color: lightgrey;
	}
`;

class App extends Component {
	render() {
		return (
			<Router>
				<Styled>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/projects/lyricclassifier">
							<LyricClassifier />
						</Route>
						<Route path="/projects/simulation">
							<Simulation />
						</Route>
						<Route path="/projects/coursemap">
							<CourseMap />
						</Route>
						<Route path="/projects/raytracer">
							I have not created a description page for the ray tracer at the
							moment so for now feel free to check the github at--
							<a href="https://github.com/NathanielJenkins/rayTracer">
								this location
							</a>
							--. All of the files are there and a short description in the
							readme.md file.
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
					</Switch>
				</Styled>
			</Router>
		);
	}
}

export default App;
