import React, { useState } from "react"
import { Link } from 'gatsby'
import { AlignRight, X } from 'react-feather'
import 'prismjs/themes/prism-okaidia.css'
import ThemeChanger from "./ThemeChanger"
import './Header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper container';

  const images = [
    "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo.png",
    "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo1.png",
    "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo10.png",
    "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo12.png",
    "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo3.png",
    "https://raw.githubusercontent.com/saulofilho/benditocheiro/master/static/assets/logos/logo7.png"
  ];

  const size = images.length;
  const magic = Math.floor(size * Math.random());
  const logo = images[magic];

  return (
    <header className="header-blog">
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/"}>
              <img src={logo} alt="logo header" id="img-bg" />
            </Link>
          </div>
        </div>
        <ThemeChanger />
        <div className="header-right-desk">
          <Link to={"/#sobre"}>sobre</Link>
          <Link to={"/produtos"}>produtos</Link>
          <Link to={"/#contato"}>contato</Link>
        </div>
        <button
          className="button-blank menu-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ?
            <X
              color={"var(--orange)"}
              className="x"
            />
            :
            <AlignRight
              color={"var(--orange)"}
              className="menu"
            />}
        </button>
      </div>
    </header>
  )
}

export default Header
