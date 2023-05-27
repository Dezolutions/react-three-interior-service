import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {AppRouter, Navbar} from './components';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  )
}

export default App
