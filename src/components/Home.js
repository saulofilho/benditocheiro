import React from 'react'
import './Home.scss'

import Logo from '../../static/assets/logos/bvl-icon.png'
import Intro from '../../static/assets/videos/intro.mp4'

const Home = () => {
  return (
    <>
      <div className="vimeo-wrapper">
        <video id="video-hero" muted autoPlay loop>
          <source src={Intro} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="home-wrapper container">
        <img src={Logo} alt="logo bvl" />
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
    </>
  )
}

export default Home
