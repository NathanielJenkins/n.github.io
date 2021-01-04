import React, { Component } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import styled from 'styled-components'
import ProjectCard from './ProjectCard'
import courseMapImg from '../img/coursemap.png'
import rayTracing from '../img/raytrace.bmp'
import networking from '../img/networking1.png'
import ml from '../img/heatmap.png'
import ergo from '../img/ergo.png'
import appmain from '../img/appmain.png'
import render from '../img/code_render_7.jpg'
import sudoku from '../img/sudoku.gif'
import blog from '../img/blog.png'

const Styled = styled.div``

const cardInfo = [
	{
		title: 'Front End Blog with Auto Compiled Markdown',
		subtitle: 'Front End Gatsby React',
		img: blog,
		github: 'https://github.com/alastairroberts/the-apartment',
		demo: 'https://the-apartment.ca',
		overview: `This website was created for a friend who wanted a blog / media site that he and others could publish their work to. It all works by querying markdown files using graphql`,
		lo: ['React', 'Gatsby', 'MaterialUI', 'Front-End', 'GraphQL'],
	},
	{
		title: 'Sudoku Solver Backtracking Visualizer ',
		subtitle: 'Algorithms',
		img: sudoku,
		github: 'https://github.com/NathanielJenkins/SudokuVi',
		demo: 'https://nathanieljenkins.github.io/sudokuVi/',
		overview: `The website will generate, solve and visualize a brute force backtracking algorithm. It goes square by square and tries each number. If it cannot continue anymore then it will backtrack to a place it can continue`,
		lo: ['React', 'Algorithms', 'Backtracking', 'Visualization'],
	},
	{
		title: 'Cinema 4D + Corona Rendering',
		subtitle: 'Computer Art',
		img: render,
		overview: `Working on product renders and animations with Cinema 4D program and Corona Renderer`,
		learn: 'projects/computer_art',
		lo: [
			'Cinema4D',
			'Corona Renderer',
			'Product Rendering',
			'Product Design',
			'Material Design',
			'Lighting',
		],
	},
	{
		title: 'E-Commerce Store (Work)',
		subtitle: 'Web Dev',
		img: ergo,
		overview: `Developed an e-commerce store from scratch with 2 other Co-op students as part of a work experience program over 8-months. The site handles product inventory, product customization, administrative side, reviews, email subscription, cart, account management and many other core e-commerce ideas`,
		demo: 'https://store.ergonomyx.com/',
		lo: [
			'flask',
			'python',
			'javascript',
			'psql',
			'jQuery',
			'UI',
			'Graphics',
			'Payment Processing stripe',
			'Business',
		],
	},
	{
		title: 'Course Map',
		subtitle: 'Web Dev',
		img: courseMapImg,
		overview:
			'This website creates a map of the prerequisites required to take a course at UVIC. This website was created by scrapping the UVIC course site with beautiful and creating a database of dependencies. Please note that the site is hosted on a free heroku account so the initially loading period (waking it from sleep) may take a minute, after which it will work fine',
		github: 'https://github.com/NathanielJenkins/Course_Map',
		demo: 'https://coursemap.herokuapp.com/',
		learn: 'projects/coursemap',
		lo: [
			'webscraping (beautiful soup)',
			'flask',
			'python',
			'javascript',
			'mysql',
			'relational recursive database',
		],
	},
	{
		title: 'Ray Tracing',
		subtitle: 'Computer Graphics',
		img: rayTracing,
		overview: `
		This ray tracer was built from the ground up. 
		It features specular reflection, diffuse reflection, 
		mesh mapping, texture mapping, shadows, point/directional 
		lighting, parallelization and multi-sampling/anti-aliasing techniques. An example image is shown on the right. In order to run program yourself you need CMake, python, C++.`,
		github: 'https://github.com/NathanielJenkins/rayTracer',
		learn: 'projects/rayTracer',
		lo: [
			'Modern, scalable C++',
			'computer graphics/computer rendering fundamentals',
			'graphics math foundations',
		],
	},
	{
		title: ' (In Progress) Songbird Mobile App + API',
		subtitle: 'Mobile app + API',
		img: appmain,
		overview:
			'Building an app that allows musicians to connect with venues easier. So far I have written the user authentication on both FE and BE',
		github: 'https://github.com/NathanielJenkins/JoFi',
		lo: ['Express Api', 'Nodejs', 'React Native', 'Mongodb (mongoose)'],
	},
	{
		title: 'Priority Queueing to Alleviate Packet Re-ordering Problem',
		subtitle: 'Networking',
		img: networking,
		overview:
			'This project investigates the extent that the inclusion of a priority queue in an intermediary router helps mitigate the problem of packets reordering from the source to the destination in a system',
		github: 'https://github.com/NathanielJenkins/SimulationProject',
		demo:
			'https://github.com/NathanielJenkins/SimulationProject/blob/master/Report%20Project.pdf',
		learn: 'projects/simulation',
		lo: ['Java', 'data analysis', 'real world modeling'],
	},
	{
		title: 'Lyric Genre Classifier',
		subtitle: 'Machine Learning',
		img: ml,
		overview: `This project serves to identify if there exists a link between the lyrics of a song and genre that the song belongs to. The notebook will analyze the effectiveness of different machine
			learning techniques, algorithms and natural language processing
			tools to determine the correlation between lyrics and musical
			genres.`,
		github: 'https://github.com/NathanielJenkins/LyricGenreClassifier',
		demo:
			'https://github.com/NathanielJenkins/LyricGenreClassifier/blob/final/project.ipynb',
		learn: 'projects/lyricclassifier',
		lo: ['python', 'numpy', 'sklearn', 'seaborn', 'nltk', 'jupyter notebook'],
	},
]

class ProjectOverview extends Component {
	createCards = () => {
		let cards = []

		for (let i = 0; i < cardInfo.length; i++) {
			cards.push(
				<Row key={`project-card-row-${i}`}>
					<Col key={`project-card-col-${i}`} md>
						<ProjectCard
							key={`project-card-${i}`}
							{...cardInfo[i]}
						></ProjectCard>
					</Col>
				</Row>
			)
		}
		return cards
	}

	state = {}
	render() {
		return (
			<Styled>
				<Container>
					<h1 className="mb-4">My Projects</h1>
					{this.createCards()}
				</Container>
			</Styled>
		)
	}
}

export default ProjectOverview
