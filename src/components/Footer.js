import React from "react"
import { Instagram, Film } from 'react-feather'
import './Footer.scss'

const FooterWrapper = () => {
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="infos">
          <p>Av. ABC</p>
          <p>Nº 666, Downtown</p>
          <p>São Paulo, Brasil</p>
        </div>
        <div className="infos">
          <a href="https://instagram.com/">
            <Instagram color={"var(--green)"} />
          </a>
          <a href="https://vimeo.com/">
            <Film color={"var(--green)"} />
          </a>
        </div>
        <div className="infos">
          <p>hi@buenavistalab.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2022 buenavistalab softwares
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterWrapper
