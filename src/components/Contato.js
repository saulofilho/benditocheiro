import React from 'react'
import './Contato.scss'

const Contato = () => {
  return (
    <div className="contato-wrapper container">
      <h1>
        Lorem Ipsum
      </h1>
      <p>
        1914 translation by H. Rackham?
      </p>
      <div class="form-row">
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/contato-ok">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>Name: <input type="text" name="name" placeholder="Your Name" /></label>
          <label>Email: <input type="email" name="email" placeholder="youremail@gmail.com" /></label>
          <label>Message: <textarea name="message"
            placeholder="Your message here..."></textarea></label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contato
