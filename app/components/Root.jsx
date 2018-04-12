import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import store, { fetchPosts } from '../store'

import MainNav from './MainNav/MainNav'
import Home from './Home/Home'
import About from './About/About'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'

class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const postThunk = fetchPosts()
    store.dispatch(postThunk)
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
