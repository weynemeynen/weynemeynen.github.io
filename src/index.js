import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from 'routes'

function App() {
  return (
    <div className="app">
      <h1>Добропожаловать в моё портфолио</h1>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
