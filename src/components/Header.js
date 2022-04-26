import React, { useState } from "react"
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import 'prismjs/themes/prism-okaidia.css'
import ThemeChanger from "./ThemeChanger"
import './Header.scss'
import Logo from '../../static/assets/logos/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper container';

  return (
    <header className="header-blog">
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/"}>
              <img src={Logo} alt="logo blog" id="img-bg" />
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
              color={"var(--green)"}
              className="x"
            />
            :
            <Menu
              color={"var(--green)"}
              className="menu"
            />}
        </button>
      </div>
    </header>
  )
}

export default Header
