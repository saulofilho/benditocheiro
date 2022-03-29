import React, { useState } from "react"
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import 'prismjs/themes/prism-okaidia.css'
import ThemeChanger from "./ThemeChanger"

import Logo from '../../static/assets/logos/logo.png'
import './Header.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClassNames = isOpen ? 'header-wrapper-active container' : 'header-wrapper container';

  return (
    <header
      className="header-blog"
    >
      <div className={menuClassNames}>
        <div className="header-left">
          <div className="logo-header">
            <Link to={"/"}>
              <img src={Logo} alt="logo blog" />
            </Link>
          </div>
        </div>
        <div className="header-right-desk">
          <Link to={"/trabalhos"}>Lorem 1</Link>
          <Link to={"/clientes"}>Lorem 2</Link>
          <Link to={"/cinema-tv"}>Lorem 3</Link>
          <ThemeChanger />
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
              color={"var(--blue)"}
              className="menu"
            />}
        </button>
      </div>
    </header>
  )
}

export default Header
