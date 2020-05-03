import React, { Component } from "react";
import styled from "styled-components";

import NavigationBar from "./NavigationBar";
import ProjectSectionHeader from "./ProjectSectionHeader";
import ml from "../img/ml.svg";
import heatmap from "../img/heatmap.png";

const Styled = styled.div`
	.panel.green {
		background-color: darkseagreen;
	}
	h3,
	h4 {
		color: cadetblue;
	}
	p {
		color: darkslategrey !important;
	}
`;

const projectInfo = {
	title: "Machine Learning",
	subtitle: "Genre Classification By Lyrics",
	panelClass: "panel green",
	svg: ml,
};

class LyricClassifier extends Component {
	state = {};
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Styled>
				<NavigationBar />
				<ProjectSectionHeader {...projectInfo} />
				<div className="container">
					<div className="row p-4">
						<div className="col-md-4">
							<h3>Overview</h3>
							<p>
								This report serves to identify if there exists a link between
								the lyrics of a song and genre that the song belongs to. The
								notebook will analyze the effectiveness of different machine
								learning techniques, algorithms and natural language processing
								tools to determine the correlation between lyrics and musical
								genres.
							</p>
							<div className="btn-group btn-block">
								<a
									href="https://github.com/NathanielJenkins/LyricGenreClassifier/blob/final/project.ipynb"
									class="btn btn-outline-dark"
									target="_blank"
								>
									Jupyter Notebook
								</a>
								<a
									href="https://github.com/NathanielJenkins/LyricGenreClassifier"
									class="btn btn-outline-dark"
									target="_blank"
								>
									Github Source
								</a>
							</div>
						</div>
						<div className="col-md-8">
							<img className="img-fluid rounded shadow-lg" src={heatmap}></img>
						</div>
					</div>
					<div className="row p-4">
						<div className="col-md-8">
							<h4>Introduction</h4>
							<p>
								Online streaming platforms like Apple Music and Spotify add new
								songs to their collection daily. Each platform gives users the
								ability to listen to and download millions unique of songs.
								These songs are catalogued and categorized so that music
								listeners may find new songs that match their unique tastes.
								Organizing songs by genre is an old and familiar technique to
								categorize music and make it easier for listeners to find songs
								they like. To classify songs into genres manually, someone would
								need to listen to it and select the genre that best applies.
								This is hard and very time-consuming job. They would require a
								knowledge of many different genres, types of music and the
								nuances between them. Machine learning and text lyric analysis
								can aid in this pursuit.
							</p>
						</div>
						<div className="col-md-4">
							<h4>Future Improvements</h4>
							<p>
								Using actual music as input, in addtion to lyrics would be
								interesting to see how the algorithms improve. Futhermore,
								better defining what the boundaries of genres by subdividing
								songs into decades
							</p>
						</div>
					</div>
				</div>
			</Styled>
		);
	}
}

export default LyricClassifier;
