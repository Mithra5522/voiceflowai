import './App.css'

function App() {
  return (
    <div>

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
            <a href="#features">Features</a>
          </li>

          <li>
            <a href="#workflow">Workflow</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>


      {/* Hero Section */}

      <section id="home" className="hero">

        <div className="hero-content">

          <h1>
            AI-Powered Meeting Minutes &
            Jira Ticket Automation
          </h1>

          <p>
            VoiceFlow AI automatically converts meeting recordings into
            smart summaries, action items, and Jira tickets using
            advanced artificial intelligence technology.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7000.jpg"
            alt="AI Assistant"
          />

        </div>

      </section>


      {/* Features */}

      <section id="features" className="features">

        <h2>Core Features</h2>

        <p className="subtitle">
          Smart AI automation features designed for modern teams.
        </p>

        <div className="feature-container">

          <div className="feature-card">

            <h3>Speech Recognition</h3>

            <p>
              Convert meeting audio recordings into accurate transcripts
              using AI-powered speech processing.
            </p>

          </div>

          <div className="feature-card">

            <h3>AI Summarization</h3>

            <p>
              Generate concise summaries and important discussion points
              automatically.
            </p>

          </div>

          <div className="feature-card">

            <h3>Jira Automation</h3>

            <p>
              Automatically generate Jira and Trello tickets from
              meeting conversations.
            </p>

          </div>

        </div>

      </section>


      {/* Workflow */}

      <section id="workflow" className="workflow">

        <h2>How VoiceFlow Works</h2>

        <p className="subtitle">
          Intelligent workflow automation in three simple steps.
        </p>

        <div className="steps">

          <div className="step-box">

            <span>1</span>

            <h3>Upload Meeting</h3>

            <p>
              Upload recorded meeting audio files securely.
            </p>

          </div>

          <div className="step-box">

            <span>2</span>

            <h3>AI Processing</h3>

            <p>
              AI analyzes conversations and extracts important details.
            </p>

          </div>

          <div className="step-box">

            <span>3</span>

            <h3>Create Tickets</h3>

            <p>
              Action items and Jira tickets are generated automatically.
            </p>

          </div>

        </div>

      </section>


      {/* Statistics */}

      <section className="statistics">

        <div className="stat-card">

          <h2>95%</h2>

          <p>Productivity Increase</p>

        </div>

        <div className="stat-card">

          <h2>80%</h2>

          <p>Time Saved</p>

        </div>

        <div className="stat-card">

          <h2>100+</h2>

          <p>Meetings Automated</p>

        </div>

      </section>


      {/* Contact */}

      <section id="contact" className="contact">

        <h2>Contact Us</h2>

        <p className="subtitle">
          Reach out to learn more about VoiceFlow AI.
        </p>

        <form>

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

    </div>
  )
}

export default App