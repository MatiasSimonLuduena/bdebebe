import "./nav.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"

import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

const Nav = () => {
  const state = useSelector(state => state);

  return (
    <nav>
      <div className="div_logo">
        <img src="Logo_B.png" alt="logo" />
        <span>B de bebé</span>
      </div>
      <div className="div_buttons">
        <Link to="/bdebebe/sign-in"><FontAwesomeIcon icon={faUser}/></Link>
        <div className="n-cart">
          <span>{state.length}</span>
          <Link to="/bdebebe/cart"><FontAwesomeIcon icon={faCartShopping}/></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav