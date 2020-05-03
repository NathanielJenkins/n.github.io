import React, { Component } from "react";
import styled from "styled-components";
import jumboImg from "../img/waterfall.jpg";
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";

const Styled = styled.div`
	.jumbotron {
		background-image: url(${jumboImg});
		background-size: cover;
		height: 100vh;
		padding-top: 15%;
		background-position: right;
	}

	.card {
		color: #dbe1e7 !important;
		background: rgba(0, 0, 0, 0.9) !important;
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
			<Card className="shadow-lg rounded">
				<Card.Body>
					<h1 mb-4>Nathan Jenkins</h1>
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
