import Navbar from './Navbar'

function Features() {

  return (

    <>

      <Navbar />

      <section className="features">

        <h2>Core Features</h2>

        <div className="feature-container">

          <div className="feature-card">

            <h3>Speech Recognition</h3>

            <p>
              Convert audio into text.
            </p>

          </div>

          <div className="feature-card">

            <h3>AI Summarization</h3>

            <p>
              Generate AI summaries instantly.
            </p>

          </div>

          <div className="feature-card">

            <h3>Jira Automation</h3>

            <p>
              Create Jira tasks automatically.
            </p>

          </div>

        </div>

      </section>

    </>

  )

}

export default Features