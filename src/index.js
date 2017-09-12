import React from 'react'
import ReactDom from 'react-dom'

import NavComponent from './components/navbar'
import HeroComponent from './components/hero'
import MissionComponent from './components/mission'
import SocialComponent from './components/social'

const App = function() {
	return (
		<div>
			<navbar>
				<NavComponent />
			</navbar>
			<HeroComponent />
			<MissionComponent />
			<SocialComponent />
		</div>
	)
}

ReactDom.render(<App />, document.querySelector('.wrapper'))
