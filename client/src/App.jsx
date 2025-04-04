import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import './App.css'
import SpicesCatalog from './components/spices-catalog/SpicesCatalog'
import SpiceCreate from './components/spice-create/SpiceCreate'
import Login from './components/login/Login'
import Register from './components/register/register'
import SpicesDetails from './components/spices-details/SpicesDetails'
import SpicesEdit from './components/spices-edit/SpicesEdit'
import { useState } from 'react'




function App() {
  const [email, setEmail] = useState('');

  const userLoginHandler = (email) => {
    setEmail(email);
  };

  return (
    <div id='box'>
      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/spices' element={<SpicesCatalog />} />
          <Route path='/spices/create' element={<SpiceCreate />} />
          <Route path='/spices/:spiceId/details' element={<SpicesDetails email={email} />} />
          <Route path='/spices/:spiceId/edit' element={<SpicesEdit />} />
          <Route path='/login' element={<Login onLogin={userLoginHandler} />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
