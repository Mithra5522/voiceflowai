import '../App.css'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')

  const [error, setError] = useState('')



  // REGISTER FUNCTION

  const handleRegister = async (e) => {

    e.preventDefault()

    try {

      const response = await fetch(

        'http://localhost:5000/api/auth/register',

        {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({

            name,
            email,
            password,

          }),

        }

      )

      const data = await response.json()

      if (!response.ok) {

        setError(data.message)

        return

      }

      alert('Registration Successful')

      navigate('/login')

    } catch (error) {

      console.log(error)

      setError('Registration Failed')

    }

  }



  return (

    <div className="contact">

      <h2>Create Account</h2>

      <form
        className="contact-form"
        onSubmit={handleRegister}
      >

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

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
          Register
        </button>

      </form>

      {
        error &&
        <p className="error">{error}</p>
      }

    </div>

  )

}

export default Register