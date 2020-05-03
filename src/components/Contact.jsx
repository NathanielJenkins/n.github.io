import React, { Component } from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-bootstrap";
const Styled = styled.div``;

class Contact extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<Container>
					<Row>
						<Col>Email : njboale-at-gmail.com</Col>
					</Row>
				</Container>
			</Styled>
		);
	}
}

export default Contact;
