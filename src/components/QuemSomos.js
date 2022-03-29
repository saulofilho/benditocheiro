import React from 'react'
import './QuemSomos.scss'

import Surf from '../../static/assets/quemsomos/16-publi.jpg'
import Festa from '../../static/assets/quemsomos/000-Mariela.jpg'
import Filme2 from '../../static/assets/quemsomos/18-publi.mp4'

const QuemSomos = () => {
  return (
    <div className="quem-wrapper container">
      <div className="quem-row">
        <div className="quem-col">
          <img src={Festa} alt="quem somos nós foto" className="img-festa" />
        </div>
        <div className="quem-col">
          <h2>Lorem Ipsum</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className="quem-row-video">
        <img src={Surf} alt="quem somos nós foto" className="img-surf" />
        <video className="video-hero2" muted autoPlay loop>
          <source src={Filme2} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  )
}

export default QuemSomos
