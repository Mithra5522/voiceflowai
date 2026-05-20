import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [task, setTask] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('High')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {

    const savedTasks =
      JSON.parse(localStorage.getItem('voiceflowtasks'))

    if(savedTasks){
      setTasks(savedTasks)
    }

  }, [])

  useEffect(() => {

    localStorage.setItem(
      'voiceflowtasks',
      JSON.stringify(tasks)
    )

  }, [tasks])

  const addTask = () => {

    if(
      task.trim() === '' ||
      assignedTo.trim() === ''
    ){
      setError('Please fill all fields')
      return
    }

    const newTask = {

      id: Date.now(),
      task,
      assignedTo,
      priority
    }

    setTasks([...tasks, newTask])

    setTask('')
    setAssignedTo('')
    setPriority('High')
    setError('')
  }

  const deleteTask = (id) => {

    const updatedTasks =
      tasks.filter((item) => item.id !== id)

    setTasks(updatedTasks)
  }

  return (

    <div className="container">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          VoiceFlow AI
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#dashboard">Dashboard</a>
          </li>

          <li>
            <a href="#tasks">Tasks</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

      {/* Hero */}

      <section id="home" className="hero">

        <div className="hero-content">

          <h1>
            AI Meeting Minutes &
            Smart Jira Automation
          </h1>

          <p>
            VoiceFlow AI transforms meetings into
            actionable insights, summaries, and
            automated Jira tasks using Artificial Intelligence.
          </p>

          <button>
            Explore Dashboard
          </button>

        </div>

      </section>

      {/* Dashboard */}

      <section id="dashboard" className="dashboard">

        <h2>AI Productivity Dashboard</h2>

        <div className="stats-container">

          <div className="stat-card">

            <h1>{tasks.length}</h1>

            <p>Total Tasks</p>

          </div>

          <div className="stat-card">

            <h1>95%</h1>

            <p>Automation Accuracy</p>

          </div>

          <div className="stat-card">

            <h1>80%</h1>

            <p>Time Saved</p>

          </div>

        </div>

      </section>

      {/* Tasks */}

      <section id="tasks" className="tasks-section">

        <h2>Meeting Action Items</h2>

        <p className="subtitle">
          Manage AI-generated meeting tasks dynamically
        </p>

        {/* Form */}

        <div className="task-form">

          <input
            type="text"
            placeholder="Enter Task"
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Assigned To"
            value={assignedTo}
            onChange={(e) =>
              setAssignedTo(e.target.value)
            }
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
          >

            <option>High</option>
            <option>Medium</option>
            <option>Low</option>

          </select>

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

        {/* Validation */}

        {
          error &&
          <p className="error">{error}</p>
        }

        {/* Dynamic Rendering */}

        <div className="tasks-container">

          {
            tasks.map((item) => (

              <div
                className="task-card"
                key={item.id}
              >

                <h3>{item.task}</h3>

                <p>
                  Assigned To:
                  <span>
                    {' '}
                    {item.assignedTo}
                  </span>
                </p>

                <div className="priority">

                  Priority:
                  <span>
                    {' '}
                    {item.priority}
                  </span>

                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(item.id)
                  }
                >
                  Delete
                </button>

              </div>

            ))
          }

        </div>

      </section>

      {/* Contact */}

      <section
        id="contact"
        className="contact"
      >

        <h2>Contact VoiceFlow AI</h2>

        <p>
          AI-powered workflow automation for
          smarter engineering teams.
        </p>

      </section>

      {/* Footer */}

      <footer>

        <p>
          © 2026 VoiceFlow AI |
          MERN Stack Internship Project
        </p>

      </footer>

    </div>
  )
}

export default App