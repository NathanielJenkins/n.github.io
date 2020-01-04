import React from "react";
import { Tween } from "react-gsap";
import styled from "styled-components";

const StaticTop = styled.div`
	width: 100vw;
	position: relative;
`;

const MusicNote = styled.div`
	font-size: 70px;
	position: absolute;
	top: 15%;
	width: 100%;
`;

const simulation = {
	jsx: {
		animation: (
			<Tween
				staggerFrom={{ x: "-20%" }}
				staggerTo={{ x: "120%" }}
				stagger={0.1}
			>
				<MusicNote>&#9833;</MusicNote>
				<MusicNote>&#9835;</MusicNote>
				<MusicNote>&#9834;</MusicNote>
				<MusicNote>&#9833;</MusicNote>
			</Tween>
		),

		static_top: (
			<StaticTop>
				<svg width="100%">
					<line
						x1="0"
						y1="0"
						x2="100%"
						y2="0"
						style={{ strokeWidth: 2, stroke: "black" }}
					/>
					<line
						x1="0"
						y1="20px"
						x2="100%"
						y2="20px"
						style={{ strokeWidth: 2, stroke: "black" }}
					/>
					<line
						x1="0"
						y1="40px"
						x2="100%"
						y2="40px"
						style={{ strokeWidth: 2, stroke: "black" }}
					/>
					<line
						x1="0"
						y1="60px"
						x2="100%"
						y2="60px"
						style={{ strokeWidth: 2, stroke: "black" }}
					/>
					<line
						x1="0"
						y1="80px"
						x2="100%"
						y2="80px"
						style={{ strokeWidth: 2, stroke: "black" }}
					/>
				</svg>
			</StaticTop>
		)
	},

	text: {
		title: "Machine Learning",
		header: `Genre Classification by Lyric Analysis`,
		subtitle: `
                    This report serves to identify if there exists a link 
                    between the lyrics of a song 
                    and genre that the song belongs to. 
                    The notebook will analyses the effectiveness of 
                    different machine learning techniques, algorithms 
                    and natural language processing tools to determine 
                    the correlation between lyrics and musical genres.`,
		link: "https://github.com/NathanielJenkins/LyricGenreClassifier",
		author: "Jenkins, Potrykus, Sandberg"
	}
};

export default simulation;