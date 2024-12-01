import React from 'react'
import Home from './pages/home/Home'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import AppLayout from './AppLayout'
import ProjectPage from './pages/projects/ProjectPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/projects' element={<ProjectPage />} />
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
