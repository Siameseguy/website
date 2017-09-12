import React, { Component } from 'react'

import NavComponent from '../components/navbar'
import HeroComponent from '../components/hero'
import MissionComponent from '../components/mission'
import SocialComponent from '../components/social'
import FooterComponent from '../components/footer'

const Home = () => {
	return (
		<div>
			<HeroComponent />
			<MissionComponent />
			<SocialComponent />
			<FooterComponent />
		</div>
	)
}

export default Home
