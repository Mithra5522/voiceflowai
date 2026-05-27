import Navbar from './Navbar'

function Dashboard() {

  return (

    <>

      <Navbar />

      <section className="dashboard">

        <h2>AI Productivity Dashboard</h2>

        <div className="stats-container">

          <div className="stat-card">

            <h1>150+</h1>

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

    </>

  )

}

export default Dashboard