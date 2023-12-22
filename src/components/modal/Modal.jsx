/* eslint-disable react/prop-types */
import "./modal.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const Modal = ({ modal, setModal }) => {
  return (
    <div className={`modal ${modal === "init" ? "hidden" : modal === "in" ? "in" : "out"}`}
        onClick={() => setModal("out")}
    >
        <div className="modal-in" onClick={e => e.stopPropagation()}>
            <h4>Hasta aquí llego nuestro stock,<br />en unos días repondremos más.</h4>
            <h5>Dejanos tu número de teléfono para avisarte ni bien repongamos.</h5>
            <div>
                <input type="number" placeholder="Tu número sin guiones ni espacios" />
                <button>
                    <FontAwesomeIcon icon={faPaperPlane}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Modal