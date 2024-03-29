import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import { ContextProvider } from 'contexts'
import CurrentUserChecker from 'components/currentUserChecker'

import routes from 'routes'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import './index.css'

const routesComponents = routes.map(route => (
  <Route path={route.path}
    component={route.component}
    exact={route.exact}
    key={route.path}
  />
))

const App = () => {
  return (
    <ContextProvider>
      <CurrentUserChecker>
        <HashRouter>
          <Navbar />
          <Switch>
            {routesComponents}
          </Switch>
          <Footer />
        </HashRouter>
      </CurrentUserChecker>
    </ContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
