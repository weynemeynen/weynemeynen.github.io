import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { ContextProvider } from 'contexts'

import Routes from 'routes'
import Navbar from "components/Navbar";
import Footer from "components/Footer";

import './index.css'

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </ContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
