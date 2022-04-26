import React from 'react'
import './About.scss'
import Chapada from '../../static/assets/default-img.jpg'

const About = () => {
  return (
    <div className="sobre-wrapper container" id="sobre">
      <h1>Sobre a marca bendito cheiro</h1>
      <div className="sobre-row">
        <div className="sobre-col">
          <img src={Chapada} alt="sobre somos nós foto" className="img-festa" />
        </div>
        <div className="sobre-col">
          <p>
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
