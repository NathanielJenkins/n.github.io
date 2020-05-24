import React, { Component } from "react";
import styled from "styled-components";
import jumboImg from "../img/waterfall.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faPenFancy,
	faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
	Jumbotron,
	Card,
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap";
import me from "../img/meflat.png";
import img2 from "../img/compguy.png";
import img1 from "../img/artguy.png";

const Styled = styled.div`
	.jumbotron {
		// background-image: url(${jumboImg});
		background-color: transparent !important;
		// background-attachment: fixed;
		// background-repeat: no-repeat;
		// background-position: right;
		// background-size: cover;
		height: 95vh; 
	}


	#profile {
		max-height: 400px;
		max-width: 400px;
	}

	hr {
		display: block;
		height: 1px;
		border: 0;
		border-top: 2px solid #ccc;
		margin: 1em 0;
		padding: 0;
	}

	.card-img {
		width: 300px; 
	}
	.card-text {
		color: darkgrey !important ; 
	}

	.bio {
		background-color: #10182F; 
		color: white !important; 
	}

	.bio-text {		
		color: white !important;
		font-weight: 300 !important; 
	}

	
	.margin-lg {
		margin-top: 150px !important;
		margin-bottom: 150px !important;; 
	}

	@media (min-width: 576px) {
		.margin-lg {
			margin-left: 20px !important;
			margin-right; 20px !important;
			
		}
		
	}

	@media (min-width: 1200px) {
		.margin-lg {
			margin-left: 150px !important; 
			margin-right: 150px !important;
		
	
		}

	}

	.cards {
		background-color: darkgrey; 
		position: relative; 
		top: -75px; 
		padding: 50px; 
		border-radius: 25px; 
	}

	.icon-container {
		color: #3A5D67 !important; 
	}

	.icon {
		border-color: red; 
		border: solid; 
		padding: 5px; 
		border-radius: 5px; 
		border-size: 1px; 
	}

	.card-image{
		max-height: 280px; 
	}
	.card-img-container{
		min-height: 300px
	}

	.list-group-item {
		border-color: #3A5D67 !important; 
	}
`;

const cardInfo = [
	{
		title: "Designer",
		technologies: [
			"React",
			"React-Native",
			"HTML, CSS",
			"Bootstrap",
			"Adobe Creative Suite",
		],
		icon: faPenFancy,
		img: img1,
	},
	{
		title: "Programming",
		technologies: [
			"NodeJS",
			"C++",
			"Java",
			"Python",
			"SQL (postgres, mysql, sqlite)",
		],
		icon: faTerminal,
		img: img2,
	},
];

class Bio extends Component {
	state = {};
	createCards = () => {
		let cards = [];
		for (let i = 0; i < cardInfo.length; i++) {
			cards.push(
				<Col md className="mb-4">
					<InformationCard {...cardInfo[i]}></InformationCard>
				</Col>
			);
		}
		return cards;
	};
	render() {
		return (
			<Styled>
				<Jumbotron>
					<Container>
						<Row className="mb-4">
							<Col md>
								<div className="text-center">
									<h1 className="title">Hello, I'm Nathan</h1>
									<h3>Software Developer, Computer Science </h3>
									<img
										alt="profile"
										id="profile"
										src={me}
										className="img-fluid"
									></img>
								</div>
							</Col>
						</Row>
						<br />
						<Row className="mt-4 text-center">
							<Col xs>
								<a
									style={{ color: "black" }}
									target="_blank"
									href="https://github.com/NathanielJenkins"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon size="4x" icon={faGithub} />
								</a>
							</Col>
							<Col xs>
								<a
									style={{ color: "black" }}
									target="_blank"
									href="https://www.linkedin.com/in/nathan-jenkins-boale-17b933129/"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon size="4x" icon={faLinkedin} />
								</a>
							</Col>
							<Col xs>
								<a
									style={{ color: "black" }}
									target="_blank"
									href="mailto:njboale@gmail.com"
									rel="noopener noreferrer"
								>
									<FontAwesomeIcon size="4x" icon={faEnvelope} />
								</a>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
				<Container className="bio" fluid>
					<Row>
						<Col>
							<div className="margin-lg text-center">
								<h3 className=" title mb-4">About myself</h3>
								<p className="text-center bio-text">
									As a recent graduate from the University of Victoria, I have
									had plenty of opportunity to improve my creative and technical
									development skills. I have spent 8 months in a full stack web
									development position. During this time, I increased my
									knowledge of NodeJs by developing with React and an express
									Rest API, python with Flask, and relational/non-relational
									databases while working to develop and a backend for an
									e-commerce platform.
								</p>
								<p className="text-center bio-text">
									I enjoyed my time in the Computer Science Program at UVIC and
									learned some practical skills. I have spent time developing
									with functional and object-oriented languages like Java and
									Python and have a strong background in problem solving with
									various algorithms and data structure. With these core skills,
									I worked as a Lab instructor and TA for an introductory Python
									course and have completed several large school projects. Some
									of which you may find described here.
								</p>
							</div>
						</Col>
					</Row>
				</Container>
				<Container className="cards shadow">
					<Row>{this.createCards()}</Row>
				</Container>
			</Styled>
		);
	}
}

class InformationCard extends Component {
	state = {};

	render() {
		// render the technolgies
		const listGroup = [];
		for (const [index, value] of this.props.technologies.entries()) {
			listGroup.push(<ListGroupItem key={index}>{value}</ListGroupItem>);
		}
		return (
			<Card className="text-center mx-auto shadow">
				<div className="my-auto card-img-container">
					<Card.Img
						className="img-responsive card-image mb-2 p-3"
						src={this.props.img}
					></Card.Img>
				</div>

				<span className="icon-container text-center mb-1">
					<FontAwesomeIcon
						className="icon mb-2"
						size="4x"
						icon={this.props.icon}
					/>
					<Card.Title className="title">{this.props.title}</Card.Title>
				</span>
				<Card.Body>
					<ListGroup>{listGroup}</ListGroup>
				</Card.Body>
			</Card>
		);
	}
}

export default Bio;
