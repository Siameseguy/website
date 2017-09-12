import React from 'react'
import ReactDom from 'react-dom'

import NavComponent from './components/navbar'
import HeroComponent from './components/hero'

const App = function() {
	return (
		<navbar>
			<NavComponent />
			<HeroComponent />
		</navbar>
	)
}

ReactDom.render(<App />, document.querySelector('.wrapper'))
