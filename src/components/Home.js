import React, { useEffect } from 'react'
import './Home.scss'
import TypeAnimation from 'react-type-animation';
import AOS from 'aos';
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

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
          <TypeAnimation
            cursor={false}
            sequence={['ART', 3000, 'ARTESANAL', 3000, 'ARTE', 3000, 'ARTESANATO', 3000]}
            repeat={Infinity}
          />
        </h1>
      </div>
    </>
  )
}

export default Home
