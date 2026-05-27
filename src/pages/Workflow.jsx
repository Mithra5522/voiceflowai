import Navbar from './Navbar'

function Workflow() {

  return (

    <>

      <Navbar />

      <section className="workflow">

        <h2>How VoiceFlow Works</h2>

        <div className="steps">

          <div className="step">

            <span>1</span>

            <h3>Upload Meeting</h3>

            <p>
              Upload meeting recordings.
            </p>

          </div>

          <div className="step">

            <span>2</span>

            <h3>AI Processing</h3>

            <p>
              AI extracts tasks.
            </p>

          </div>

          <div className="step">

            <span>3</span>

            <h3>Create Tickets</h3>

            <p>
              Generate Jira tasks automatically.
            </p>

          </div>

        </div>

      </section>

    </>

  )

}

export default Workflow