import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const SectionWipes2Styled = styled.div`
	overflow: hidden;
	#pinContainer {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#pinContainer .panel {
		height: inherit;
		width: inherit;
		position: absolute;
		text-align: center;
	}
	.panel span {
		top: calc(50% - 80px);
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
	}

	.panel.blue {
		background: #141e30; /* fallback for old browsers */
		background: -webkit-linear-gradient(
			to right,
			#243b55,
			#141e30
		); /* Chrome 10-25, Safari 5.1-6 */
		background: linear-gradient(
			to right,
			#243b55,
			#141e30
		); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	}

	.panel.turqoise {
		background-color: #38ced7;
	}

	.scroll {
		border: solid grey;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 10px;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}

	#scroll-cont {
		position: absolute;
		color: white;
		bottom: 50px;
		width: 100%;
	}
`;

const Header = () => (
	<SectionWipes2Styled>
		<Controller>
			<Scene triggerHook="onLeave" duration={800} pin>
				<Timeline wrapper={<div id="pinContainer" />}>
					<Timeline wrapper={<section className="panel blue" />}>
						<span className="display-1">Hello.</span>

						<div id="scroll-cont" className="mx-auto">
							<div className="scroll"></div>
							<p className="text-muted">Scroll</p>
						</div>

						<Tween
							from={{ y: "50%", opacity: 0 }}
							to={{ y: "0%", opacity: 1 }}
						>
							<span>
								<p className="lead">Nathan Jenkins</p>
							</span>
						</Tween>
					</Timeline>
					<Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
						<section className="panel turqoise">
							<span className="display-3">My Projects.</span>
						</section>
					</Tween>
				</Timeline>
			</Scene>
		</Controller>
	</SectionWipes2Styled>
);

export default Header;
