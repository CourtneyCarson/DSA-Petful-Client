// import './index.css'

// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('app'))


import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {AppContextProvider} from './context/context'
import './index.css';
import App from './App'



ReactDOM.render(
  <Router>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </Router>
, document.getElementById('root'));