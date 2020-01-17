import React, { Component } from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

const InfoStyled = styled.div`
	overflow: hidden;
	h1 {
		font-weight: 900;
		font-size: 10vw;
		color: #243b55;
	}

	.pinContainer {
		height: 100vh;
		width: 100vw;
	}

	.static-bottom {
		padding: 5%;
	}

	.scroll {
		border: solid black;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 10px;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}

	.scroll-cont {
		width: 100%;
	}
`;

const Section = props => {
	const scene = props.scene;
	return (
		<InfoStyled>
			<Controller>
				<Scene triggerHook="onCenter" duration={scene.length}>
					<Timeline wrapper={<div class="pinContainer" />}>
						<h1>{scene.text.title}</h1>
						{scene.jsx.static_top}

						{scene.jsx.animation}

						<div className="static-bottom">
							<div className="text-box">
								<h2>{scene.text.header}</h2>
								<p className="lead">{scene.text.subtitle}</p>
								<p className="text-muted">
									{scene.text.author}
								</p>
							</div>
							<a
								href={scene.text.link}
								className="btn btn-outline-dark float-center"
								target="_blank"
							>
								Github
							</a>
						</div>
					</Timeline>
				</Scene>
			</Controller>
		</InfoStyled>
	);
};

export default Section;
