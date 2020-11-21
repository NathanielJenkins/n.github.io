import React, { Component } from "react";
import styled from "styled-components";

import NavigationBar from "./NavigationBar";
import ProjectSectionHeader from "./ProjectSectionHeader";

import sim from "../img/simulation.svg";
import delay from "../img/networking1.png";
import model from "../img/model.png";

const Styled = styled.div`
	.panel.lavender {
		background-color: lavender;
	}

	h3,
	h4 {
		color: indigo;
	}
	p {
		color: darkslategrey !important;
	}
`;

const projectInfo = {
	title: "Simulation",
	subtitle: "Priority Queueing to Alleviate Packet Re-ordering Problem",
	panelClass: "panel lavender",
	svg: sim,
};
class Simulation extends Component {
	state = {};
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Styled>
				<NavigationBar bg="light" color="lavender" />
				<ProjectSectionHeader {...projectInfo} />
				<div className="container">
					<div className="row p-4">
						<div className="col-md-4">
							<h3>Overview</h3>
							<p>
								This project investigates the extent that the inclusion of a
								priority queue in an intermediary router helps mitigate the
								problem of packets reordering from the source to the destination
								in a system.
							</p>
							<div className="btn-group btn-block">
								<a
									href="https://github.com/NathanielJenkins/SimulationProject/blob/master/Report%20Project.pdf"
									class="btn btn-outline-dark"
									target="_blank"
									rel="noopener noreferrer"
								>
									Project Report
								</a>
								<a
									href="https://github.com/NathanielJenkins/SimulationProject"
									class="btn btn-outline-dark"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github Source
								</a>
							</div>
						</div>
						<div className="col-md-8">
							<img
								alt="delay simulation"
								className="img-fluid rounded shadow border"
								src={delay}
							></img>
						</div>
					</div>
					<div className="row p-4">
						<div className="col-md-6">
							<img alt="model" className="img-fluid" src={model}></img>
						</div>
						<div className="col-md-6">
							<h4>Description</h4>
							<p>
								The two simulation models were evaluated with the following
								specification and details.
							</p>
							<h6>System 1 Packet Ordering</h6>
							<p>
								System 1 Packet Ordering: The system uses two queues marked high
								and low. An incoming packet is marked as inorder if the router
								current sequence number is less than the incoming packet
								sequence and placed into the low priority queue. The incoming
								packet is marked as out of order if the router current sequence
								number is greater than the incoming packet and placed into the
								high queue. The packets are ordered within the respective queues
								according to a FIFO.
							</p>
							<h6>System 2 Packet Ordering</h6>
							<p>
								An incoming packet will be placed into the single queue and will
								be served according to a FIFO strategy.
							</p>
						</div>
					</div>
				</div>
			</Styled>
		);
	}
}

export default Simulation;
