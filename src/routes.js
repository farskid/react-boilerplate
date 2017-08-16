import * as reactRouter from 'react-router'
import React from 'react'
import RedirectComponent from './containers/Redirect'
import App from './containers/AppWrapper'
import Step1 from './containers/Step1Form/Step1Form'
import Step2 from './containers/Step2Form/Step2Form'

const { Route, Router, IndexRoute } = reactRouter

const createRouter = history => {
  return (
    <Router history={history}>
      <Route path="/" component={RedirectComponent} />
      <Route path="/create" component={App}>
        <IndexRoute component={Step1} />
        <Route path="/create/date" component={Step2} />
      </Route>
    </Router>
  )
}

export default createRouter
