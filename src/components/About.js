import React, { useEffect } from 'react'
import './About.scss'
import Chapada from '../../static/assets/default-img.jpg'
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="sobre-wrapper container" id="sobre">
      <h1 data-aos="fade-up">Sobre a marca bendito cheiro</h1>
      <div className="sobre-row">
        <div className="sobre-col">
          <img src={Chapada} alt="sobre somos nós foto" className="img-festa" data-aos="fade-right"/>
        </div>
        <div className="sobre-col">
          <p data-aos="fade-down">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
