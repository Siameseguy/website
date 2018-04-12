import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import loggingMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk
import axios from 'axios'

const initialState = {
  posts: []
}

//ACTION TYPE
const GET_POSTS = 'GET_POSTS'

// ACTION CREATORS
export const getPosts = posts => {
  return {
    type: GET_POSTS,
    posts
  }
}

//THUNK CREATORS
export function fetchPosts() {
  return function thunk(dispatch) {
    return axios
      .get('/api/posts')
      .then(res => res.data)
      .then(posts => {
        dispatch(getPosts(posts))
      })
  }
}

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts
      }

    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggingMiddleware)
)

export default store
