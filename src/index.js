import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { ContextProvider } from 'contexts'
import CurrentUserChecker from 'components/currentUserChecker'

import routes from 'routes'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'

import './index.css'

const history = createBrowserHistory()

const routesComponents = routes.map(route => {
  return <Route path={route.path}
    component={route.component}
    exact={route.exact}
    key={route.path}
  />
})

const App = () => {
  return (
    <ContextProvider>
      <CurrentUserChecker>
        <BrowserRouter history={history}>
          <Navbar />
          <Switch>
            {routesComponents}
          </Switch>
          <Footer />
        </BrowserRouter>
      </CurrentUserChecker>
    </ContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
