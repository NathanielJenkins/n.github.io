import React, { Component } from "react";
import styled from "styled-components";

import { Container, Table } from "react-bootstrap";

import NavigationBar from "./NavigationBar";
const Styled = styled.div``;

class Contact extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<NavigationBar />
				<Container className="mt-4">
					<h1 className="text-center">Contact</h1>
					<hr></hr>

					<Table striped bordered variant="light">
						<tbody>
							<tr>
								<td>Email</td>
								<td>njboale **at** gmail.com</td>
							</tr>
						</tbody>
					</Table>
				</Container>
			</Styled>
		);
	}
}

export default Contact;
