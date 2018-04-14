import React from 'react'
import { connect } from 'react-redux'
import { getFormInputs } from '../../store'

const ContactForm = props => {
  return (
    <div>
      <h1>Contact Me!</h1>
      <form>
        <input
          onChange={props.handleChange}
          type="text"
          name="name"
          placeholder="Name goes here"
        />
        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          placeholder="Email goes here"
        />
        <textarea
          onChange={props.handleChange}
          type="text"
          name="content"
          placeholder="Content goes here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: function(evt) {
      const inputValue = {
        [evt.target.name]: evt.target.value
      }
      const action = getFormInputs(inputValue)
      dispatch(action)
    }
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(ContactForm)

export default Container
