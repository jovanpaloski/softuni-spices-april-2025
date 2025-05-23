import { Routes, Route } from 'react-router'
import { useState } from 'react'

import { UserContext } from './contexts/useContext.js'

import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import SpiceCatalog from './components/spice-catalog/SpiceCatalog'
import SpiceCreate from './components/spice-create/SpiceCreate'
import SpiceDetails from './components/spice-details/SpiceDetails'
import SpiceEdit from './components/spice-edit/SpiceEdit'
import Logout from './components/logout/Logout'
import './App.css'

function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  };

  const userLogoutHandler = () => {
    setAuthData({});
  };

  return (
    <UserContext.Provider value={{...authData, userLoginHandler, userLogoutHandler}}>
      <div id='box'>
        <Header />

        <main id="main-content">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/spices' element={<SpiceCatalog />} />
            <Route path='/spices/create' element={<SpiceCreate />} />
            <Route path='/spices/:spiceId/details' element={<SpiceDetails />} />
            <Route path='/spices/:spiceId/edit' element={<SpiceEdit />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </main>
      </div>
    </UserContext.Provider>
  )
}

export default App
