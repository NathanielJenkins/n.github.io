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
								<Link
									to="/projects/coursemap"
									className="link text-uppercase right-justify dropdown-item"
								>
									Course Map
								</Link>
								<Link
									to="/projects/raytracer"
									className="link text-uppercase dropdown-item right-justify"
								>
									Ray Tracer
								</Link>
								<Link
									to="/projects/lyricclassifier"
									className="link text-uppercase right-justify dropdown-item"
								>
									Lyric Classifier
								</Link>
								<Link
									to="/projects/simulation"
									className="link text-uppercase right-justify dropdown-item"
								>
									Networking Sim
								</Link>
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
