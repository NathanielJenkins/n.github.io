import React, { Component } from "react";
import styled from "styled-components";

const Styled = styled.div`
	overflow: hidden;

	.panel {
		height: 100vh;
		width: 100vw;
		overflow: hidden;

		color: white;

		position: relative;
		display: block;

		&.display-1 {
			font-weight: 100;
			letter-spacing: 5px;
		}
		&.display-3 {
			font-weight: 200;
		}
		&.display-4 {
			color: darkslategrey;
		}
	}
	h2 {
		color: grey;
	}
`;

class ProjectSection extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<div className={`mx-auto text-center ${this.props.panelClass}`}>
					<h1 data-aos="fade-down" className="mt-3">
						{this.props.title}
					</h1>
					<h2 data-aos="fade-down">{this.props.subtitle}</h2>

					<div className="img-container" data-aos="zoom-in">
						<img alt="svg" className="p-4 img-fluid" src={this.props.svg}></img>
					</div>
				</div>
			</Styled>
		);
	}
}

export default ProjectSection;
