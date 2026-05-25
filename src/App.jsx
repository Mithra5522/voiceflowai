import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  const [task, setTask] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('High')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')



  // FETCH TASKS

  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/tasks'
      )

      setTasks(res.data)

    } catch (error) {

      console.log('FETCH ERROR:', error)

    }

  }



  useEffect(() => {

    fetchTasks()

  }, [])



  // ADD TASK

  const addTask = async (e) => {

  e.preventDefault()

  console.log("BUTTON CLICKED")

  if (
    task.trim() === '' ||
    assignedTo.trim() === ''
  ) {

    setError('Please fill all fields')
    return

  }

  try {

    const newTask = {
      task,
      assignedTo,
      priority
    }

    console.log("SENDING:", newTask)

    const response = await fetch(
      'http://localhost:5000/api/tasks',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      }
    )

    console.log("STATUS:", response.status)

    const data = await response.json()

    console.log("DATA:", data)

    if (!response.ok) {

      throw new Error(data.message || 'Failed')

    }

    fetchTasks()

    setTask('')
    setAssignedTo('')
    setPriority('High')
    setError('')

    alert('Task Added Successfully')

  } catch (error) {

    console.log('ADD TASK ERROR:', error)

    setError('Failed to add task')

  }

}



  // DELETE TASK

  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/tasks/${id}`
      )

      const updatedTasks =
        tasks.filter((item) => item._id !== id)

      setTasks(updatedTasks)

    } catch (error) {

      console.log('DELETE ERROR:', error)

    }

  }



  // UPDATE TASK

  const updateTask = async (id, oldTask) => {

    const updatedTask = prompt(
      'Edit Task',
      oldTask
    )

    if (!updatedTask) return

    try {

      const res = await axios.put(

        `http://localhost:5000/api/tasks/${id}`,

        {
          task: updatedTask
        }

      )

      const updatedTasks =
        tasks.map((item) =>

          item._id === id
            ? res.data
            : item

        )

      setTasks(updatedTasks)

    } catch (error) {

      console.log('UPDATE ERROR:', error)

    }

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
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#workflow">Workflow</a>
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
            automated Jira tasks using AI.
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



      {/* Features */}

      <section
        id="features"
        className="features"
      >

        <h2>Core Features</h2>

        <div className="feature-container">

          <div className="feature-card">

            <h3>Speech Recognition</h3>

            <p>
              Convert meeting audio recordings
              into accurate text using AI.
            </p>

          </div>

          <div className="feature-card">

            <h3>AI Summarization</h3>

            <p>
              Generate concise meeting summaries instantly.
            </p>

          </div>

          <div className="feature-card">

            <h3>Jira Automation</h3>

            <p>
              Automatically create Jira tickets
              from meeting discussions.
            </p>

          </div>

        </div>

      </section>



      {/* Workflow */}

      <section
        id="workflow"
        className="workflow"
      >

        <h2>How VoiceFlow Works</h2>

        <div className="steps">

          <div className="step">

            <span>1</span>

            <h3>Upload Meeting</h3>

            <p>
              Upload recorded meeting audio files.
            </p>

          </div>

          <div className="step">

            <span>2</span>

            <h3>AI Processing</h3>

            <p>
              AI analyzes conversations and extracts tasks.
            </p>

          </div>

          <div className="step">

            <span>3</span>

            <h3>Create Tickets</h3>

            <p>
              Jira tickets are generated automatically.
            </p>

          </div>

        </div>

      </section>



      {/* TASKS */}

      <section id="tasks" className="tasks-section">

        <h2>Meeting Action Items</h2>

        <p className="subtitle">
          Manage AI-generated meeting tasks dynamically
        </p>



        {/* TASK FORM */}

        <form
          className="task-form"
          onSubmit={addTask}
        >

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

          <button type="submit">
            Add Task
          </button>

        </form>



        {/* ERROR */}

        {
          error &&
          <p className="error">{error}</p>
        }



        {/* TASK LIST */}

        <div className="tasks-container">

          {
            tasks.map((item) => (

              <div
                className="task-card"
                key={item._id}
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

                <div className="task-buttons">

                  <button
                    className="edit-btn"
                    onClick={() =>
                      updateTask(
                        item._id,
                        item.task
                      )
                    }
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteTask(item._id)
                    }
                  >
                    Delete
                  </button>

                </div>

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

        <h2>Contact Us</h2>

        <p>
          Reach out to learn more about VoiceFlow AI.
        </p>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            placeholder="Enter Your Email"
          />

          <textarea
            rows="5"
            placeholder="Enter Your Message"
          >
          </textarea>

          <button type="submit">
            Submit
          </button>

        </form>

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