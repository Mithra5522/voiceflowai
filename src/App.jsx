import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Workflow from './pages/Workflow'
import Tasks from './pages/Tasks'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/features"
          element={<Features />}
        />

        <Route
          path="/workflow"
          element={<Workflow />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App