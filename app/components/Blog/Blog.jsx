import React from 'react'
import store, { fetchPosts } from '../../store'
import { connect } from 'react-redux'

const Blog = props => {
  const { posts } = props
  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.content}</p>
            <p>{post.createdAt}</p>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    posts: state.posts
  }
}

const PostsContainer = connect(mapStateToProps)(Blog)
export default PostsContainer
