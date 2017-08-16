import React from 'react'

class RedirectComponent extends React.Component {
  componentDidMount() {
    window.location.assign('/create')
  }
  render() {
    return null
  }
}

export default RedirectComponent
