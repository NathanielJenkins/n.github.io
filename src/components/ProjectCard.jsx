import React, { Component } from "react";
import {
	Col,
	Row,
	Card,
	Button,
	ButtonGroup,
	Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Styled = styled.div`
	.card-text {
		color: grey !important;
	}
	
	.card-row {
		min-height 350px; 
	}

	.thumbnail {
		max-height: 350px; 
		padding: 10px; 		
	}

	.vh-center { 
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	overflow : hidden; 
`;

class ProjectCard extends Component {
	state = {};
	render() {
		return (
			<Styled data-aos="fade-up">
				<Card className="shadow mb-4">
					<Container>
						<Row className="card-row">
							<Col xl={4} className="d-flex text-center">
								<img
									className="mx-auto my-auto img-fluid thumbnail"
									src={this.props.img}
								></img>
							</Col>
							<Col xl={6}>
								<Card.Body>
									<Card.Title>{this.props.title}</Card.Title>
									<Card.Subtitle>{this.props.subtitle}</Card.Subtitle>
									<br />
									<Card.Text>{this.props.overview}</Card.Text>
									{this.props.learn ? (
										<Link to={this.props.learn}> Learn More</Link>
									) : null}
									<hr />
									<Card.Text className="mb-1">Learning Outcomes:</Card.Text>
									<blockquote className="text-">{this.props.lo}</blockquote>
								</Card.Body>
							</Col>
							<Col xl={2}>
								<Card.Body>
									<ButtonGroup
										style={{ width: "100%" }}
										vertical
										className="mt-0"
									>
										<Button
											href={this.props.github}
											block
											variant="outline-dark"
											target="_blank"
										>
											Github
										</Button>
										{this.props.demo ? (
											<Button
												target="_blank"
												href={this.props.demo}
												variant="dark"
											>
												Demo
											</Button>
										) : null}
									</ButtonGroup>
								</Card.Body>
							</Col>
						</Row>
					</Container>
				</Card>
			</Styled>
		);
	}
}

export default ProjectCard;
