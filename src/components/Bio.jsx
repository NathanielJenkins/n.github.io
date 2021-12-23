import React, { Component } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPenFancy,
  faTerminal
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  Jumbotron,
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import me from "../img/meflat.png";
import img2 from "../img/compguy.png";
import img1 from "../img/artguy.png";
import strengths from "../img/strengths.png";

const Styled = styled.div`
	.jumbotron {
		min-height: calc(100vh - 56px);
		background-color: transparent !important;
	
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
	}

	.bio-text {		
		color: lightgrey !important;
		font-weight: 500 !important; 
	}
	
	.bio-title {
		color: white !important;
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
		background-color: #3A5D67; 
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

	}
	.card-img-container{

	}

	.list-group-item {
		border-color: #3A5D67 !important; 
	}

	.hr {
		height: 5px;
  		width: 25%;
		background-color: white;
		border-radius: 2px;
	}
`;

const cardInfo = [
  {
    title: "Designer",
    technologies: [],
    icon: faPenFancy,
    img: img1
  },
  {
    title: "Programming",
    technologies: [],
    icon: faTerminal,
    img: img2
  }
];

class Bio extends Component {
  state = {};
  createCards = () => {
    let cards = [];
    for (let i = 0; i < cardInfo.length; i++) {
      cards.push(
        <Col key={`information-card-col-${i}`} md className="mb-4">
          <InformationCard
            key={`information-card-${i}`}
            {...cardInfo[i]}
          ></InformationCard>
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
                <div className="text-center mx-auto w-100">
                  <h1 className="title">Hello, I'm Nathan</h1>
                  <h3>Software Developer, Computer Science </h3>
                  <img
                    data-aos="zoom-in"
                    alt="profile"
                    id="profile"
                    src={me}
                    className="img-fluid img-responsive"
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
                  <FontAwesomeIcon
                    data-aos="float-down"
                    size="4x"
                    icon={faGithub}
                  />
                </a>
              </Col>
              <Col xs>
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  href="https://www.linkedin.com/in/nathan-taylor-jenkins-boale-17b933129/"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    data-aos="float-down"
                    size="4x"
                    icon={faLinkedin}
                  />
                </a>
              </Col>
              <Col xs>
                <a
                  style={{ color: "black" }}
                  target="_blank"
                  href="mailto:njboale@gmail.com"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    data-aos="float-down"
                    size="4x"
                    icon={faEnvelope}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Jumbotron>

        <Container fluid>
          <Row>
            <Col>
              <img alt="strengths" className="img-fluid " src={strengths}></img>
            </Col>
          </Row>
        </Container>
        <Container className="bio" fluid>
          <Row>
            <Col>
              <div className="margin-lg text-center">
                <h2 className="bio-title mb-3">About myself</h2>
                <div className="hr mx-auto mb-4" />
                <p className="text-center bio-text">
                  I am a software developer living in Canada. Looking for
                  something new.
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
      <Card className="text-center h-100 mx-auto shadow">
        <div className="my-auto card-img-container w-100">
          <Card.Img
            className="img-responsive img-fluid card-image mb-2 p-3"
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
