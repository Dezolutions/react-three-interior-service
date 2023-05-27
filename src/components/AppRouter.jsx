import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { routes } from '../routes'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({path, component}) => 
        <Route key={path} path={path} Component={component} />
      )}
    </Routes>
  )
}

export default AppRouter