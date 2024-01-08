import "./nav.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

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
        <div className="n-cart">
          <span>{state.length}</span>
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping}/></Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav