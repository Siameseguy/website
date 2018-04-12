import React, { Component } from 'react'
import { connect } from 'react-redux'
import store, { fetchPosts } from '../store'

import Blog from './Blog'

const mapStateToProps = state => {
  return {
    allPosts: state.allPosts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadFetchPosts: () => {
      const thunk = fetchPosts()
      dispatch(thunk)
    }
  }
}

class BlogContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Blog posts={this.state.allPosts} />
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(BlogContainer)

export default Container
