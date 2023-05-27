import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';


const App = () => {

  return (
    <div className='app'>
      <Home/>
    </div>
  )
}

export default App
