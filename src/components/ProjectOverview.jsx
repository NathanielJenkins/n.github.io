import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import courseMapImg from "../img/coursemap.png";
import rayTracing from "../img/raytrace.bmp";
import networking from "../img/networking1.png";
import ml from "../img/heatmap.png";

const Styled = styled.div``;

const cardInfo = [
	{
		title: "Course Map",
		subtitle: "Web Dev",
		img: courseMapImg,
		overview:
			"This website creates a map of the prerequisites required to take a course at UVIC. This website was created by scrapping the UVIC course site with beautiful and creating a database of dependencies. Please note that the site is hosted on a free heroku account so the initially loading period (waking it from sleep) may take a minute, after which it will work fine",
		github: "https://github.com/NathanielJenkins/Course_Map",
		view: "https://coursemap.herokuapp.com/",
		learn: "projects/coursemap",
	},
	{
		title: "Ray Tracing",
		subtitle: "Computer Graphics",
		img: rayTracing,
		overview:
			"This ray tracer was built from the ground up. It features specular reflection, diffuse reflection, mesh mapping, texture mapping, shadows, point/directional lighting and multi-sampling techniques. An example image is shown on the right. In order to run program yourself you need CMake, python, C++.",
		github: "https://github.com/NathanielJenkins/rayTracer",
	},
	{
		title: "Priority Queueing to Alleviate Packet Re-ordering Problem",
		subtitle: "Networking",
		img: networking,
		overview:
			"This project investigates the extent that the inclusion of a priority queue in an intermediary router helps mitigate the problem of packets reordering from the source to the destination in a system",
		github: "https://github.com/NathanielJenkins/SimulationProject",
		view:
			"https://github.com/NathanielJenkins/SimulationProject/blob/master/Report%20Project.pdf",
		learn: "projects/simulation",
	},
	{
		title: "Lyric Genre Classifier",
		subtitle: "Machine Learning",
		img: ml,
		overview: `This project serves to identify if there exists a link between the lyrics of a song and genre that the song belongs to. The notebook will analyze the effectiveness of different machine
			learning techniques, algorithms and natural language processing
			tools to determine the correlation between lyrics and musical
			genres.`,
		github: "https://github.com/NathanielJenkins/LyricGenreClassifier",
		view:
			"https://github.com/NathanielJenkins/LyricGenreClassifier/blob/final/project.ipynb",
		learn: "projects/lyricclassifier",
	},
];

class ProjectOverview extends Component {
	createCards = () => {
		let cards = [];
		for (let i = 0; i < cardInfo.length; i++) {
			cards.push(
				<Row>
					<Col md>
						<ProjectCard {...cardInfo[i]}></ProjectCard>
					</Col>
				</Row>
			);
		}
		return cards;
	};

	state = {};
	render() {
		return (
			<Styled>
				<Container>
					<h1>My Projects</h1>
					{this.createCards()}
				</Container>
			</Styled>
		);
	}
}

export default ProjectOverview;
