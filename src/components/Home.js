import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <>
      <div className="canvas-wrapper">
        <div className="canvas">
          <canvas id="canvas-screen" width="32" height="32"></canvas>
        </div>
      </div>
      <div className="home-wrapper container">
        <h1>
          BENDITO CHEIRO
          ARTESANAL
        </h1>
      </div>
    </>
  )
}

export default Home
