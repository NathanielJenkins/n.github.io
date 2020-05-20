import React, { Component } from "react";
import styled from "styled-components";
import jumboImg from "../img/waterfall.jpg";
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";
import ReactVivus from "react-vivus";
import svg from "../img/hi.svg";

const Styled = styled.div`
	.jumbotron {
		background-image: url(${jumboImg});
		height: 100vh;
		padding-top: 15%;

		background-attachment: fixed;
		background-repeat: no-repeat;
		background-position: right;
		background-size: cover;
	}

	.card {
		color: #dbe1e7 !important;
		background: rgba(0, 0, 0, 0.8) !important;
	}

	hr {
		display: block;
		height: 1px;
		border: 0;
		border-top: 2px solid #ccc;
		margin: 1em 0;
		padding: 0;
	}
`;

class Bio extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<Jumbotron>
					<Container fluid>
						<Row>
							<Col md>
								<InformationCard />
							</Col>
							<Col md></Col>
						</Row>
					</Container>
				</Jumbotron>
			</Styled>
		);
	}
}

class InformationCard extends Component {
	state = {};
	render() {
		return (
			<Card className="shadow-lg rounded" data-aos="zoom-in-down">
				<Card.Body>
					<ReactVivus
						id="Name"
						option={{
							file: svg,
							animTimingFunction: "linear",
							type: "sync",
							duration: 1500,
						}}
						style={{ height: "100px", maxWidth: "500px" }}
					/>
					<hr />
					<br />
					<Card.Text>
						Hello, this is relatively new website and a work in progress.
					</Card.Text>
					<Card.Text>
						Here you can find some projects and some articles. I hope to grow
						this website in the coming months by adding new and exciting
						projects, personal photos/videos and research articles.
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default Bio;
