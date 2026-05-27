import '../App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Tasks() {

  const [task, setTask] = useState('')
  const [assignedTo, setAssignedTo] = useState('')
  const [priority, setPriority] = useState('High')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  const userEmail =
    localStorage.getItem("userEmail")



  // FETCH TASKS

  const fetchTasks = async () => {

    try {

      const res = await axios.get(

        `http://localhost:5000/api/tasks?email=${userEmail}`

      )

      setTasks(res.data)

    } catch (error) {

      console.log(error)

    }

  }



  useEffect(() => {

    fetchTasks()

  }, [])



  // ADD TASK

  const addTask = async (e) => {

    e.preventDefault()

    if (
      task.trim() === '' ||
      assignedTo.trim() === ''
    ) {

      setError('Please fill all fields')
      return

    }

    try {

      await axios.post(

        'http://localhost:5000/api/tasks',

        {

          task,
          assignedTo,
          priority,

          userEmail:
            localStorage.getItem("userEmail")

        }

      )

      fetchTasks()

      setTask('')
      setAssignedTo('')
      setPriority('High')
      setError('')

    } catch (error) {

      console.log(error)

    }

  }



  // DELETE TASK

  const deleteTask = async (id) => {

    try {

      await axios.delete(

        `http://localhost:5000/api/tasks/${id}`

      )

      fetchTasks()

    } catch (error) {

      console.log(error)

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

      await axios.put(

        `http://localhost:5000/api/tasks/${id}`,

        {
          task: updatedTask
        }

      )

      fetchTasks()

    } catch (error) {

      console.log(error)

    }

  }



  return (

    <div className="tasks-section">

      <h2>Meeting Action Items</h2>

      <p className="subtitle">
        Manage AI-generated meeting tasks dynamically
      </p>
      <h3 className="user-email">
  Logged in as: {userEmail}
</h3>



      {/* FORM */}

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



      {/* TASKS */}

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
                {' '}
                {item.assignedTo}
              </p>

              <div className="priority">

                Priority:
                {' '}
                {item.priority}

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

    </div>

  )

}

export default Tasks