import React, { Component } from "react";
import styled from "styled-components";
import sub from "../img/submarineoutoffocus.mov";

import { Container, Row, Col, Table } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
const Styled = styled.div``;

class Contact extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<NavigationBar />
				<Container className="mt-4">
					<Row>
						<Col>
							<h1>Cinema4D Tutorial</h1>
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
