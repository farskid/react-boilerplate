import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="pm container">
        {this.props.children}
      </div>
    )
  }
}

export default App
