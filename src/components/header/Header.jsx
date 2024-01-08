/* eslint-disable react/prop-types */
import "./header.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="header">
      <h1>Bienvenida a <span>B de Bebé</span></h1>
      <h2>
        Lotes super economicos para tu bebé.
      </h2>
      <p>✓ Todas las talles y estilos.</p>
      <p>✓ Reserva las prendas que te gusten.</p>
      <p>✓ Devolución en tiempo y forma.</p>
      <Link to="cards" spy={true} smooth={true} offset={-80} duration={500}>
        <FontAwesomeIcon icon={faArrowDown}/>
      </Link>
    </div>
  )
}

export default Header