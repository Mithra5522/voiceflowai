import './App.css'

function App() {
  return (
    <>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">VoiceFlow AI</div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Workflow</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button className="nav-btn">Get Started</button>

      </nav>


      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <h1>AI-Driven Meeting Minutes & Jira Ticket Creator</h1>

          <p>
            VoiceFlow AI transforms meeting recordings into intelligent summaries,
            action items, and automated Jira tickets using advanced AI technology.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Upload Meeting
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
            alt="AI Assistant"
          />

        </div>

      </section>


      {/* Features Section */}

      <section className="features">

        <h2>Core Features</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>Audio Transcription</h3>
            <p>
              Convert meeting recordings into accurate text using AI speech recognition.
            </p>
          </div>

          <div className="feature-card">
            <h3>AI Summarization</h3>
            <p>
              Generate concise meeting summaries and key decision points instantly.
            </p>
          </div>

          <div className="feature-card">
            <h3>Jira Automation</h3>
            <p>
              Automatically create Jira and Trello tasks from meeting discussions.
            </p>
          </div>

        </div>

      </section>


      {/* Workflow Section */}

      <section className="workflow">

        <h2>How VoiceFlow Works</h2>

        <div className="steps">

          <div className="step">
            <span>1</span>
            <h3>Upload Audio</h3>
            <p>Upload recorded meeting audio files.</p>
          </div>

          <div className="step">
            <span>2</span>
            <h3>AI Processing</h3>
            <p>AI transcribes and analyzes conversations.</p>
          </div>

          <div className="step">
            <span>3</span>
            <h3>Create Jira Tickets</h3>
            <p>Tasks and tickets are generated automatically.</p>
          </div>

        </div>

      </section>


      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">
          <h2>95%</h2>
          <p>Productivity Boost</p>
        </div>

        <div className="stat-box">
          <h2>80%</h2>
          <p>Time Saved</p>
        </div>

        <div className="stat-box">
          <h2>100+</h2>
          <p>Meetings Processed</p>
        </div>

      </section>


      {/* Contact Section */}

      <section className="contact">

        <h2>Contact Us</h2>

        <form>

          <input type="text" placeholder="Enter Your Name" />

          <input type="email" placeholder="Enter Your Email" />

          <textarea
            rows="5"
            placeholder="Enter Your Message">
          </textarea>

          <button type="submit">
            Submit
          </button>

        </form>

      </section>


      {/* Footer */}

      <footer>

        <p>
          © 2026 VoiceFlow AI | MERN Stack Internship Project
        </p>

      </footer>

    </>
  )
}

export default App