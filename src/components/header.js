import React from 'react'
import { Link } from 'react-router-dom'

const NavComponent = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-light bg-light">
			<Link to="/">Nousit</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="link-to" to="/about">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link className="link-to" to="/projects">
							Projects
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavComponent
