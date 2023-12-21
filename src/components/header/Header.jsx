import "./header.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
        <h1>Bienvenido a <span>B de Bebé</span></h1>
        <h2>
            Lotes super economicos para tu bebé.
        </h2>
        <p>✓ Todas las talles y estilos.</p>
        <p>✓ Reserva las prendas que te gusten.</p>
        <p>✓ Ahorra tiempo y dinero.</p>
        <a>
            <FontAwesomeIcon icon={faArrowDown}/>
        </a>
    </div>
  )
}

export default Header