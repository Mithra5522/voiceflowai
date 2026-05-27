import { Link } from 'react-router-dom'

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        VoiceFlow AI
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/features">
            Features
          </Link>
        </li>

        <li>
          <Link to="/workflow">
            Workflow
          </Link>
        </li>

        <li>
          <Link to="/tasks">
            Tasks
          </Link>
        </li>

        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/login">
            Login
          </Link>
        </li>

        <li>
          <Link to="/register">
            Register
          </Link>
        </li>

      </ul>

    </nav>

  )

}

export default Navbar