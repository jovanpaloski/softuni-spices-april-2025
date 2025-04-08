import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import SpiceCatalog from './components/spice-catalog/SpiceCatalog'
import SpiceCreate from './components/spice-create/SpiceCreate'
import SpiceDetails from './components/spice-details/SpiceDetails'
import SpiceEdit from './components/spice-edit/SpiceEdit'
import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('');

  const userLoginHandler = (authData) => {
    console.log(authData);

    setEmail(authData.email);
  };

  return (
    <div id='box'>
      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/spices' element={<SpiceCatalog />} />
          <Route path='/spices/create' element={<SpiceCreate />} />
          <Route path='/spices/:spiceId/details' element={<SpiceDetails email={email} />} />
          <Route path='/spices/:spiceId/edit' element={<SpiceEdit />} />
          <Route path='/login' element={<Login onLogin={userLoginHandler} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
