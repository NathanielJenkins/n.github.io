import React, { Component } from "react";
import styled from "styled-components";

import { Container, Row, Col, Carousel } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
import Artboard_1 from "../img/Artboard_1.jpg";
import Artboard_2 from "../img/Artboard_2.jpg";
import Artboard_3 from "../img/Artboard_3.jpg";

const Styled = styled.div`
	.carousel-control-next-icon {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
	}

	.carousel-control-prev-icon {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
	}
`;

class ECommerceDesign extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<NavigationBar />
				<Container className="mt-4">
					<h1 className="text-center">C3 Design Proposal</h1>
					<p className="text-center">
						Here find a proposal created with Photoshop for an e-commerce
						platform. Product photos where rendered with Cinema4D.
					</p>
					<hr></hr>
					<Row>
						<Col>
							<Carousel className="mx-auto">
								<Carousel.Item>
									<img
										className="mx-auto d-block w-75"
										src={Artboard_1}
										alt="First slide"
									/>
									<Carousel.Caption
										style={{ backgroundColor: "rgba(0,0,0,0.5" }}
									>
										<h3>Home Page</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="mx-auto d-block w-75"
										src={Artboard_2}
										alt="Second slide"
									/>
									<Carousel.Caption
										style={{ backgroundColor: "rgba(0,0,0,0.5" }}
									>
										<h3>Product Page</h3>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="mx-auto d-block w-75"
										src={Artboard_3}
										alt="Third slide"
									/>
									<Carousel.Caption
										style={{ backgroundColor: "rgba(0,0,0,0.5" }}
									>
										<h3>Enquiries Page</h3>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Container>
			</Styled>
		);
	}
}

export default ECommerceDesign;
