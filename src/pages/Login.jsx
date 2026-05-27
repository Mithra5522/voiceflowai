import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')



  // LOGIN FUNCTION

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const response = await fetch(

        'http://localhost:5000/api/auth/login',

        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({

            email,
            password

          }),

        }

      )

      const data = await response.json()

      if (!response.ok) {

        setError(data.message)
        return

      }

      // STORE EMAIL

      localStorage.setItem(
        "userEmail",
        data.email
      )

      alert('Login Successful')

      navigate('/tasks')

    } catch (error) {

      console.log(error)

      setError('Login Failed')

    }

  }



  return (

    <div className="contact">

      <h2>Login</h2>

      <form
        className="contact-form"
        onSubmit={handleLogin}
      >

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>

      </form>

      {
        error &&
        <p className="error">{error}</p>
      }

    </div>

  )

}

export default Login