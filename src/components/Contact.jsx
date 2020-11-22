import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaChild } from "react-icons/fa";
import NavigationBar from "./NavigationBar";

import styled from "styled-components";

const Styled = styled.div`
	background-color: #0f182e;
	color: white;

	.full-screen-center {
		min-height: calc(100vh - 56px);
		-webkit-flex-flow: column wrap;
		-ms-flex-flow: column wrap;
		flex-flow: column wrap;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}
`;

const Contact = () => {
	return (
		<Styled>
			<NavigationBar bg="dark" />
			<Container className="full-screen-center">
				<Row>
					<Col>
						<h1>Contact</h1>
					</Col>
				</Row>
				<Row className="pt-4">
					<Col md className="my-auto mt-3">
						<h3>
							<FaPhone className="mb-2" /> Phone:{" "}
							<a className="thick" href="tel:778-888-8352">
								(778) 888-8352
							</a>
						</h3>
					</Col>
					<Col md className="mt-3">
						<h3>
							<FaEnvelope className="mb-2" /> Email:{" "}
							<a className="thick" href="mailto:njboale@gmail.com">
								njboale@gmail.com
							</a>
						</h3>
					</Col>
				</Row>
				<Row className="pt-4">
					<Col md className="my-auto">
						<h3>
							<FaChild className="mb-2" />
							Contact me to chat!
						</h3>
						<p>
							Please enter your information and I will return your message as
							soon as possible
						</p>
					</Col>
					<Col md>
						<Form action="https://formspree.io/f/myybpqgz" method="POST">
							<Form.Group>
								<Form.Group>
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										placeholder="Enter Name"
									/>
								</Form.Group>
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									name="_replyto"
									placeholder="Enter email"
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Message</Form.Label>
								<Form.Control
									type="text"
									name="message"
									as="textarea"
									rows={3}
								/>
							</Form.Group>
							<Button variant="danger" type="submit">
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Styled>
	);
};

export default Contact;
