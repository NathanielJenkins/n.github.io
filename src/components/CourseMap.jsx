import React, { Component } from "react";
import styled from "styled-components";

import NavigationBar from "./NavigationBar";
import ProjectSectionHeader from "./ProjectSectionHeader";

import tree from "../img/tree.svg";
import treepng from "../img/coursemap.png";
import course from "../img/course.png";

const Styled = styled.div`
	background-color: #464646;
	.panel.orange {
		background-color: orange;
	}

	h3,
	h4 {
		color: indigo;
	}
	p {
		color: lightgrey !important;
	}
`;

const projectInfo = {
	title: "Course Map",
	subtitle: "Builds a tree of pre reqs for a given course",
	panelClass: "panel orange",
	svg: tree,
};

class CourseMap extends Component {
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
						<div className="col-md-8 mx-auto ">
							<img
								className="mb-2 img-fluid rounded shadow-lg"
								src={treepng}
							></img>
						</div>

						<div className="col-md-4 mt-2">
							<h3 style={{ color: "orange" }}>Overview</h3>
							<p>
								This website was created by scrapping the uvic course site with
								beautiful and creating a database of dependencies. There are
								three tables in the database, course, operations and
								precombinations. Courses may have many types of operations and
								operations may have many of different courses.
							</p>
							<p>
								<b>Notice:</b> This project is hosted on a free heroku account
								so the initial loading period may take some time to wake the
								application, after which it will work normally.
							</p>
							<div className="btn-group btn-block">
								<a
									class="btn btn-outline-light"
									target="_blank"
									href="https://coursemap.herokuapp.com/"
								>
									Live Site
								</a>
								<a
									class="btn btn-outline-light"
									target="_blank"
									href="https://github.com/NathanielJenkins/Course_Map"
								>
									Github Source
								</a>
							</div>
						</div>
					</div>
					<div className="row p-4">
						<div className="col">
							<h4 style={{ color: "orange" }}>Database Schema</h4>

							<p>
								The database has three tables, courses, operations and
								precombinations. They are related by the following example The
								course CSC 361 has two direct operations. Single course with
								SENG 265 and One of CSC 230, CENG 255 ECE 255. Each of these
								course have one or many operations, who have one or many
								precombination courses
							</p>
						</div>
					</div>
					<div className="row p-4">
						<div class="col-md-6">
							<h4 style={{ color: "orange" }}>Web Scrapping</h4>

							<p>
								The database was created by scrapping the UVIC course website.
								It goes through each faculty and then each course where it
								stores the prereq information in a JSON file. The JSON file
								later further processed to create the database.
							</p>

							<a
								href="https://github.com/NathanielJenkins/Course_Map/blob/master/uvic/webScraper.py"
								type="button"
								class="btn btn-outline-light btn-block"
								target="_blank"
							>
								Webscrapping Source
							</a>
						</div>
						<div className="col-md-6 mt-4">
							<img className="img-fluid rounded shadow-lg" src={course}></img>
						</div>
					</div>
				</div>
			</Styled>
		);
	}
}

export default CourseMap;
