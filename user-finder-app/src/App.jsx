import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import {BrowserRouter} from "react-router-dom"
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
    </>
  )
}

export default App
