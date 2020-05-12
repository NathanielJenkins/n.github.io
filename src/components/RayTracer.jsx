import React, { Component } from "react";
import styled from "styled-components";

import NavigationBar from "./NavigationBar";
import ProjectSectionHeader from "./ProjectSectionHeader";

import ray from "../img/arrows.svg";
import raytrace from "../img/raytrace.bmp";

const Styled = styled.div`
	background-color: #17202a;
	.panel.crimson {
		background-color: #cd6155;
	}

	h3,
	h4 {
		color: #cd6155;
	}
	p {
		color: lightgrey !important;
	}
`;

const projectInfo = {
	title: "Computer Graphics",
	subtitle: "Ray Tracer",
	panelClass: "panel crimson",
	svg: ray,
};
class Simulation extends Component {
	state = {};
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Styled>
				<NavigationBar />
				<ProjectSectionHeader {...projectInfo} />
				<div className="container">
					<div className="row">
						<div className="col-md-8  p-4">
							<h3>Overview</h3>
							<p>
								This ray tracer was built from the ground up. It features
								specular reflection, diffuse reflection, mesh mapping, texture
								mapping, shadows, point/directional lighting, parallelization
								and multi-sampling/anti-aliasing techniques. An example image is
								shown on the right. In order to run program yourself you need
								CMake, python, C++.
							</p>
							<div className="btn-group btn-block">
								<a
									href="https://github.com/NathanielJenkins/rayTracer"
									class="btn btn-outline-light"
									target="_blank"
								>
									Github Source
								</a>
							</div>
						</div>
						<div className="col-md-4  p-4">
							<img
								className="img-fluid rounded shadow border"
								src={raytrace}
							></img>
						</div>
					</div>
					<div className="row">
						<div className="col p-4">
							<h4>Description</h4>
							<p>The following program files create a ray tracer. </p>
							<p>
								"Ray tracing is a rendering technique for generating an image by
								tracing the path of light as pixels in an image plane and
								simulating the effects of its encounters with virtual objects."
								- Wikipedia.
							</p>
							<p>
								I created this project with help from the textbook by Kevin
								Smith. Not too sure what to say more about it. It took a really
								long and has a lot of elements. I learned a lot behind the
								fundamental concepts in computer graphics and how to create a
								large, scalable program with modern C++ code. A lot hours went
								into this project..
							</p>
						</div>
					</div>
				</div>
			</Styled>
		);
	}
}

export default Simulation;
