import React from "react";
import { Tween } from "react-gsap";
import styled from "styled-components";

const StaticTop = styled.div`
    #router{
		width: 200px;
      	height: 200px;
		border-radius: 50%
		border: 5px solid black;  
 		text-align: center; 
		margin:10px;	
		position: relative; 
		background-color:lightblue; 
	}
`;

const PacketContainer = styled.div`
	width: inherit;
	position: relative;

	.packet {
		height: 25px;
		width: 100px;
		border: 2px solid black;
		text-align: center;

		&.red {
			background-color: coral;
		}

		&.salmon {
			background-color: Aqua;
		}
	}
`;

const simulation = {
	jsx: {
		animation: (
			<Tween
				staggerFrom={{ x: "-20%" }}
				staggerTo={{ x: "50%" }}
				stagger={0.5}
			>
				<PacketContainer>
					<div className="packet red">Packet</div>
				</PacketContainer>
				<PacketContainer>
					<div className="packet red">Packet</div>
				</PacketContainer>
				<PacketContainer>
					<div className="packet red">Packet</div>
				</PacketContainer>
			</Tween>
		),

		static_top: (
			<StaticTop>
				<div className="mx-auto" id="router">
					Router
				</div>
			</StaticTop>
		)
	},

	text: {
		title: "Simulation",
		header: `Priority Queueing to Alleviate Packet Re-ordering Problem`,
		subtitle: `
					This project investigates how the inclusion 
					of a priority queue in an intermediary router 
					helps to mitigate the packet reordering problem.`,
		link: "https://github.com/NathanielJenkins/SimulationProject",
		author: "Belliveau, Jenkins"
	},
	length: 800

};

export default simulation;
