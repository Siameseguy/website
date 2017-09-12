import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container,
	Row,
	Col,
	Jumbotron,
	Button
} from 'reactstrap'
import { Link } from 'react-router-dom'

class NavComponent extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false
		}
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		return (
			<div>
				<Navbar className="navbar-expand-lg" color="inverse" inverse toggleable>
					<NavbarToggler right onClick={this.toggle} />
					<NavbarBrand href="/">Nousit</NavbarBrand>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/about">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/projects">Projects</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}

export default NavComponent
