import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import MainNav from './MainNav/MainNav'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'

/* The code below does NOT relate to your project.
   This code is just a nice BIG example of how you can make a component.
   Also it is HILARIOUS :D Have fun!
 */

class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Root
