import React, { Component } from "react";
import styled from "styled-components";
import sub from "../img/submarineoutoffocus.mov";
import ren1 from "../img/code_render_1.jpg";
import ren2 from "../img/code_render_2.jpg";
import ren3 from "../img/code_render_3.jpg";
import ren4 from "../img/code_render_4.jpg";
import ren5 from "../img/code_render_5.jpg";
import ren6 from "../img/code_render_6.jpg";
import ren7 from "../img/code_render_7.jpg";
import ren8 from "../img/code_render_8.jpg";

import select1 from "../img/select_1.jpg";
import select2 from "../img/select_2.jpg";
import select3 from "../img/select_3.jpg";
import select4 from "../img/select_3.jpg";
import select5 from "../img/select_3.jpg";

import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
const Styled = styled.div`
	.white-button {
		background-color: white !important;
	}
	.grey-button {
		background-color: grey !important;
	}
	.black-button {
		background-color: black !important;
	}
	.button-group-cus {
		min-height: 30px;
	}
	.btn:hover,
	.btn:active {
		opacity: 0.5 !important;
	}

	.cus-but {
		border-color: light-grey !important;
		width: 100px;
		height: 50px;
	}

	.small-col {
		max-width: 800px;
	}
`;
const images = [select1, select2, select3];
class Contact extends Component {
	state = {
		current_selected: 0,
	};

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	setCurrentSelected(value) {
		console.log(value);
		this.setState({
			current_selected: value,
		});
	}

	render() {
		const imageIndex = this.state.current_selected;
		return (
			<Styled>
				<NavigationBar />
				<Container className="mt-4">
					<h1 className="text-center">Cinema4D + Corona Renderer</h1>
					<p className="text-center">
						Here find a small selection of products I have rendered with
						Cinema4D and Corona Renderer. These Products are part of
						Code-Electric line.
					</p>
					<hr></hr>
					<Row className="mb-4">
						<Col>
							<img alt="render 7" className="img-fluid" src={ren7} />
						</Col>{" "}
					</Row>
					<Row className="mb-4">
						<Col>
							{" "}
							<img alt="render 2" className="img-fluid" src={ren2} />
						</Col>
						<Col>
							{" "}
							<img alt="render 4" className="img-fluid" src={ren4} />
						</Col>
					</Row>

					<Row className="mb-4">
						<Col>
							{" "}
							<img alt="render 3" className="img-fluid" src={ren3} />
						</Col>
						<Col>
							{" "}
							<img alt="render 1" className="img-fluid" src={ren1} />
						</Col>
					</Row>
					<Row className="mb-4">
						<Col>
							<img alt="render 8" className="img-fluid" src={ren8} />
						</Col>{" "}
					</Row>
					<h3 className="text-center">Product Customization</h3>
					<Row className="mb-4 ml-1 mr-1">
						<Col className="mx-auto text-center shadow small-col">
							<img
								alt="selected"
								className="img-fluid"
								src={images[this.state.current_selected]}
							/>
						</Col>
						<Container className="mt-2 text-center">
							<Row>
								<Col>
									<h6>Select Color</h6>
									<ButtonGroup className="button-group-cus">
										<Button
											type="button"
											className="white-button btn cus-but"
											variant="outline-dark"
											onClick={() => this.setCurrentSelected(1)}
										></Button>
										<Button
											type="button"
											className="grey-button btn cus-but"
											variant="outline-dark"
											onClick={() => this.setCurrentSelected(0)}
										></Button>
										<Button
											type="button"
											className="black-button cus-but"
											variant="outline-dark"
											onClick={() => this.setCurrentSelected(2)}
										></Button>
									</ButtonGroup>
								</Col>
							</Row>
						</Container>
					</Row>
				</Container>
				<Container className="mt-4">
					<h1>Cinema4D Tutorial</h1>

					<Row>
						<Col>
							<div className="mx-auto text-center">
								<video
									id="sub-vid"
									className="embed-responsive embed-responsive-16by9"
									muted
									autoPlay
									loop
									controls
								>
									<source type="video/mp4" src={sub} />
								</video>
								<p>
									This video I made with Cinema4D following the beginner
									tutorial located on Cineversity
								</p>
							</div>
						</Col>
					</Row>
				</Container>
			</Styled>
		);
	}
}

export default Contact;
