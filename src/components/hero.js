import React from 'react'
import ReactDom from 'react-dom'

const HeroComponent = function() {
	return (
		<div className="jumbotron">
			<h1 className="display-3">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component for
				calling extra attention to featured content or information.
			</p>
		</div>
	)
}

export default HeroComponent
