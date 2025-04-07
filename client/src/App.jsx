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

function App() {
  return (
    <div id='box'>
      <Header />

      <main id="main-content">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/spices' element={<SpiceCatalog />} />
          <Route path='/spices/create' element={<SpiceCreate />} />
          <Route path='/spices/:spiceId/details' element={<SpiceDetails />} />
          <Route path='/spices/:spiceId/edit' element={<SpiceEdit />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
