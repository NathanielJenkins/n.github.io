import { Container, Row, Col, Table } from "react-bootstrap";
import { FaRegFileAlt } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
import PDF from "../files/transcript.pdf";
const Education = () => {
	const Styled = styled.div`
		background-color: #0f182e;
		color: white;
		.table-striped > tbody > tr:nth-child(2n) > td {
			background-color: #0f182e;
		}

		th {
			background-color: #0f182e;
		}
	`;

	const onlineCourses = [
		["Mosh Programming", "Mastering React"],
		["Mosh Programming", "The Ultimate Git Course"],
		["Cineversity", "Getting Started with Cinema4d"],
	];

	return (
		<Styled>
			<Container className="py-4" id="education">
				<Row>
					<Col>
						<h1 className="text-center">Education</h1>
						<div className="mx-auto mb-3 hr" />
						<div className="border rounded py-4 mb-3 text-center">
							<h3>University of Victoria</h3>{" "}
							<h5>Computer Science - Bachelors of Science with Distinction</h5>
							<a
								rel="noopener noreferrer"
								href={PDF}
								target="_blank"
								className="btn btn-outline-light"
							>
								<FaRegFileAlt /> Transcript
							</a>
						</div>
						<div className="border rounded pb-4 ">
							<br />
							<h3 className="text-center">Online Courses</h3>
							<Table className="text-center" striped borderless variant="dark">
								<thead>
									<tr>
										<th>Institution</th>
										<th>Course Name</th>
									</tr>
								</thead>

								<tbody>
									{onlineCourses.map((value, index) => {
										return (
											<tr key={index}>
												<td style={{ width: "50%" }}>{value[0]}</td>
												<td style={{ width: "50%" }}>{value[1]}</td>
											</tr>
										);
									})}
								</tbody>
							</Table>
						</div>
					</Col>
				</Row>
			</Container>
		</Styled>
	);
};

export default Education;
