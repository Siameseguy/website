import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home'
import About from '../components/about'
import Projects from '../components/projects'

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
		</Switch>
	</main>
)

export default Main
