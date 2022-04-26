import React from "react"
import { Instagram, Film } from 'react-feather'
import './Footer.scss'

const FooterWrapper = () => {
  return (
    <footer>
      <div className="footer-wrapper container">
        <div className="infos">
          <p>Av. ABC</p>
          <p>Nº 123, Centro</p>
          <p>Cuiabá, MT - Brasil</p>
        </div>
        <div className="infos">
          <a href="https://instagram.com/bendito-cheiro-art">
            <Instagram color={"var(--green)"} />
          </a>
        </div>
        <div className="infos">
          <p>ola@benditocheiroart.com</p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2022 BENDITO CHEIRO ARTASANAL
          <br />
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterWrapper
