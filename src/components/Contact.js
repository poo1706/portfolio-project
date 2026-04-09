import React from 'react'

function Contact() {
  return (
     <section id="contact" className="section">
      <h2>Contact</h2>

      <p>Feel free to reach out to me through the following:</p>

      <div className="contact-info">
        <p>
         Email: 
          <a href="mailto:yourname@example.com">
            yourname@example.com
          </a>
        </p>

        <p>
          LinkedIn: 
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>

        <p>
         GitHub: 
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noreferrer"
          >
            github.com/yourusername
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact