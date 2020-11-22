import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

const Styled = styled.div`
	.navbar {
		z-index: 100 !important;
	}

	.link {
		margin-right: 10px !important;
		color: inherit;
		text-decoration: inherit;
	}

	.dropdown-menu {
		right: 0;
		left: auto;
	}
`;

class NavigationBar extends Component {
	state = {};
	render() {
		const contactButtonStyle = this.props.bg === "dark" ? "light" : "dark";
		return (
			<Styled>
				<Navbar
					className="navbar"
					expand="lg"
					bg={this.props.color}
					variant={this.props.bg}
					style={{ backgroundColor: this.props.color }}
				>
					<Navbar.Brand>
						<Link to="/" className={`link`}>
							<FaHome className="mb-1" /> Home
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav align-middle">
						<Nav className="text-justify-center ml-auto">
							<NavDropdown
								className={`link right-justify `}
								title="Programming Projects"
								id="basic-nav-dropdown"
							>
								<Link
									to="/projects/coursemap"
									className={`link right-justify dropdown-item`}
								>
									Course Map
								</Link>
								<Link
									to="/projects/raytracer"
									className={`link  dropdown-item right-justify`}
								>
									Ray Tracer
								</Link>
								<Link
									to="/projects/lyricclassifier"
									className={`link  right-justify dropdown-item`}
								>
									Lyric Classifier
								</Link>
								<Link
									to="/projects/simulation"
									className={`link  right-justify dropdown-item`}
								>
									Networking Sim
								</Link>
							</NavDropdown>
							<NavDropdown
								className={`link  right-justify nav-item`}
								title="Other Projects"
								id="dropDown2"
							>
								<Link
									to="/projects/computer_art"
									className={`link  right-justify dropdown-item`}
								>
									Computer Rendering / Computer Art
								</Link>
								<Link
									to="/projects/e-commerce_design"
									className={`link right-justify dropdown-item`}
								>
									E-Commerce Design
								</Link>
							</NavDropdown>
							<NavDropdown
								className={`link right-justify nav-item`}
								title="Blog"
								id="dropDown2"
							>
								<Link
									to="/blog/authentication_report"
									className={`link right-justify dropdown-item`}
								>
									Authentication flows with JWTs
								</Link>
							</NavDropdown>
							<HashLink to="#education" className={`nav-link nav-item my-auto`}>
								Education
							</HashLink>
							<Link
								to="/contact"
								className={`btn btn-outline-${contactButtonStyle} nav-item mx-2 my-auto`}
							>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Styled>
		);
	}
}

export default NavigationBar;
