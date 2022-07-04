import React, { useEffect } from 'react'
import './Contato.scss'
import Chapada from '../../static/assets/default-img.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

const Contato = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="contato-wrapper container" id="contato">
      <h1 className="title">Alguma dúvida? Entre em contato com a Bendito Cheiro Art.</h1>
      <div className="sobre-row">
        <div className="sobre-col">
        </div>
        <div className="sobre-col">
          <p className="text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="form-row">
        <div className="form-col">
          <img src={Chapada} alt="sobre somos nós foto" data-aos="fade-right"/>
        </div>
        <div className="form-col">
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
    </div>
  )
}

export default Contato
