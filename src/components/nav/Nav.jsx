import "./nav.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons"

const Nav = () => {
  return (
    <nav>
        <div className="div_logo">
            <img src="Logo_B.png" alt="logo" />
            <span>B de bebé</span>
        </div>
        <div className="div_buttons">
            <FontAwesomeIcon icon={faUser}/>
            <FontAwesomeIcon icon={faCartShopping}/>
        </div>
    </nav>
  )
}

export default Nav