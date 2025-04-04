import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import './App.css'
import SpicesCatalog from './components/spices-catalog/SpicesCatalog'
import SpiceCreate from './components/spice-create/SpiceCreate'
import Login from './components/login/Login'
import Register from './components/register/register'
import SpicesDetails from './components/spices-details/SpicesDetails'




function App() {
  return (
    <div id='box'>
      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/spices' element={<SpicesCatalog />} />
          <Route path='/spices/create' element={<SpiceCreate />} />
          <Route path='/spices/:spiceId/details' element={<SpicesDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
