import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import LyricClassifier from "./components/LyricClassifier";
import Simulation from "./components/Simulation";
import CourseMap from "./components/CourseMap";
import Contact from "./components/Contact";
import RayTracer from "./components/RayTracer";

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
			<Router basename={process.env.PUBLIC_URL}>
				<Styled>
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + "/"}>
							<Home />
						</Route>
						<Route
							exact
							path={process.env.PUBLIC_URL + "/projects/lyricclassifier"}
						>
							<LyricClassifier />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + "/projects/simulation"}>
							<Simulation />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + "/projects/coursemap"}>
							<CourseMap />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + "/projects/raytracer"}>
							<RayTracer />
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
