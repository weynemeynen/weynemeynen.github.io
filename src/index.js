import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { ContextProvider } from 'contexts'
import CurrentUserChecker from 'components/currentUserChecker'

import Routes from 'routes'
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import './index.css'

const App = () => {
  return (
    <ContextProvider>
      <CurrentUserChecker>
        <Router>
          <Navbar />
          <Routes />
          <Footer />
        </Router>
      </CurrentUserChecker>
    </ContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
