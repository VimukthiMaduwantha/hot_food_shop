import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavView from './components/NavView'
import NavViewComp from './components/NavViewComp'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Divider } from '@mui/material'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavView />
      <NavViewComp />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
      <Divider />
      <Footer />
    </>
  )
}

export default App
