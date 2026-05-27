import '../App.css'

function Contact() {

  return (

    <div className="contact">

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

    </div>

  )

}

export default Contact