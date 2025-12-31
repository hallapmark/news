// import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Avaleht from './pages/Avaleht'
import Uudised from './pages/Uudised'
import Kontakt from './pages/Kontakt/Kontakt'
import Meist from './pages/Meist'
import LisaUudis from './pages/LisaUudis'
import { ToastContainer } from 'react-toastify'
import HaldaUudiseid from './pages/HaldaUudised'
import YksUudis from './pages/YksUudis'
import MuudaUudis from './pages/MuudaUudis'

function App() {
  return (
    <>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Võta meiega ühendust</button>
      </Link>
      <Link to="/meist">
        <button>Info meist</button>
      </Link>
      <Link to="/lisa-uudis">
        <button>Lisa uudis</button>
      </Link>
      <Link to="/halda-uudiseid">
        <button>Halda uudiseid</button>
      </Link>
      <Routes>
        <Route path='/' element={ <Avaleht /> } />
        <Route path='/uudised' element={ <Uudised /> } />
        <Route path='/kontakt' element={ <Kontakt /> } />
        <Route path='/meist' element={ <Meist /> } />
        <Route path='/lisa-uudis' element={ <LisaUudis /> } />
        <Route path="/halda-uudiseid" element={ <HaldaUudiseid /> } />
        <Route path="/uudis/:index" element={ <YksUudis /> } />
        <Route path="/muuda/:index" element={ <MuudaUudis /> } />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
