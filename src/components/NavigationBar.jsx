import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div`
	.navbar {
		background-color: black !important;
		z-index: 100 !important;
	}

	.link {
		text-decoration: none !important;
		color: grey !important;
		margin-right: 10px !important;

		&:hover {
			color: darkgrey !important;
		}
	}
`;

class NavigationBar extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<Navbar bg="dark" className="navbar navbar-dark bg-dark" expand="lg">
					<Navbar.Brand href="#home">
						<Link to="/" className="link nav-item">
							Home
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<NavDropdown
								className="link text-uppercase right-justify nav-item"
								title="Projects"
								id="basic-nav-dropdown"
							>
								<NavDropdown.Item>
									<Link
										to="/projects/coursemap"
										className="link text-uppercase right-justify nav-item"
									>
										Course Map
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										to="/projects/lyricclassifier"
										className="link text-uppercase right-justify nav-item"
									>
										Lyric Classifier
									</Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Link
										to="/projects/simulation"
										className="link text-uppercase right-justify nav-item"
									>
										Networking Sim
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link>
								<Link to="/contact" className="link text-uppercase nav-item">
									Contact
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Styled>
		);
	}
}

export default NavigationBar;
