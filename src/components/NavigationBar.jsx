import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.div`
	.navbar {
		z-index: 100 !important;
		background-color: white !important;
	}

	.link {
		text-decoration: none !important;
		color: #10182f !important;
		margin-right: 10px !important;

		&:hover {
			color: darkgrey !important;
		}
	}

	.dropdown-menu {
		right: 0;
		left: auto;
	}
`;

class NavigationBar extends Component {
	state = {};
	render() {
		return (
			<Styled>
				<Navbar bg="light" className="navbar" expand="lg">
					<Navbar.Brand href="#home">
						<Link to="/" className="link nav-item">
							Home
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<NavDropdown
								className="link right-justify nav-item"
								title="Programming Projects"
								id="basic-nav-dropdown"
							>
								<Link
									to="/projects/coursemap"
									className="link right-justify dropdown-item"
								>
									Course Map
								</Link>
								<Link
									to="/projects/raytracer"
									className="link  dropdown-item right-justify"
								>
									Ray Tracer
								</Link>
								<Link
									to="/projects/lyricclassifier"
									className="link  right-justify dropdown-item"
								>
									Lyric Classifier
								</Link>
								<Link
									to="/projects/simulation"
									className="link  right-justify dropdown-item"
								>
									Networking Sim
								</Link>
							</NavDropdown>
							<NavDropdown
								className="link  right-justify nav-item"
								title="Other Projects"
								id="dropDown2"
							>
								<Link
									to="/projects/computer_art"
									className="link  right-justify dropdown-item"
								>
									Computer Rendering / Computer Art
								</Link>
							</NavDropdown>
							<Nav.Link>
								<Link to="/contact" className="link  nav-item">
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
