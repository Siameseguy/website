import React from 'react'
import { Switch, Route } from 'react-router'

import App from './components/app'
import AboutComponent from './components/about'
import ProjectsComponent from './components/about'

export default (
  <Switch>
	  <Route exact path="/" component={App}>
		<Route path="/about" component={AboutComponent} />
		<Route path="/about" component={ProjectsComponent} />
	</Switch>
)
