import * as reactRouter from 'react-router'
import React from 'react'
import AppWrapper from './containers/AppWrapper'

const { Route, Router } = reactRouter

const createRouter = history => {
  return (
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        {/* Routes will go here */}
      </Route>
    </Router>
  )
}

export default createRouter
