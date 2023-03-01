import React from 'react'
import logo from "../../logo.svg"
import "./Navbar.css"
import { TiThMenuOutline } from 'react-icons/ti'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false)

  return (
<div className="container">
        <a href="/" className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Cryptonika</h1>
        </a>
        <ul className={toggleMenu ? "nav-menu-ham" : "nav-menu"}>
          <li>
            <a href="Visuals" className={toggleMenu ? "item-hamburger" : "item"}>Visuals</a>
          </li>
          <li>
            <a href="Insights" className={toggleMenu ? "item-hamburger" : "item"}>Insights</a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => {setToggleMenu(!toggleMenu)}}>
          <TiThMenuOutline/>
        </div>
      </div>
  )
}

export default Navbar