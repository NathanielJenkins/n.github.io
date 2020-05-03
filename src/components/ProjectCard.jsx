import React, { Component } from "react";
import { Col, Row, Card, Button, ButtonGroup } from "react-bootstrap";

import styled from "styled-components";
const Styled = styled.div`
	.card-text {
		color: darkgrey !important;
	}

	.thumbnail {
		max-height: 350px;
		max-width: 350px;
		margin: 10px;
	}
`;

class ProjectCard extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<Row>
					<Col>
						<Card className="shadow mb-2">
							<Row>
								<Col className="text-center" xl={4}>
									<img className="border thumbnail" src={this.props.img}></img>
								</Col>
								<Col xl={6}>
									<Card.Body>
										<Card.Title>{this.props.title}</Card.Title>
										<Card.Subtitle className="text-muted mb-2">
											{this.props.subtitle}
										</Card.Subtitle>
										<Card.Text>{this.props.overview}</Card.Text>
										{this.props.learn ? (
											<a href={this.props.learn}> Learn More</a>
										) : null}
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
											>
												Github
											</Button>
											{this.props.view ? (
												<Button href={this.props.view} variant="dark">
													View
												</Button>
											) : null}
										</ButtonGroup>
									</Card.Body>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</Styled>
		);
	}
}

export default ProjectCard;
