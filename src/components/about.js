import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BioComponent from '../components/bio'

const About = () => (
	<Switch>
		<Route exact path="/about" component={BioComponent} />
	</Switch>
)

export default About
