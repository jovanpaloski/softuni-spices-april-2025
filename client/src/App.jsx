import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import SpiceCatalog from './components/spice-catalog/SpiceCatalog'
import SpiceCreate from './components/spice-create/SpiceCreate'

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
        </Routes>
      </main>
    </div>
  )
}

export default App
