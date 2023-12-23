/* eslint-disable react/prop-types */
import "./modal.css"
import { useState } from "react"

import { doc, updateDoc, arrayUnion} from 'firebase/firestore';
import { firestore } from "../../firebase"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const Modal = ({ modal, setModal }) => {
    const [num, setNum] = useState("");
    const [error, setError] = useState([false, false]);

    async function clic() {
        if (num.length < 7) {
            setError([true, false]);
            return;
        }
        
        setError([false, true]);
        setTimeout(() => setModal(false), 1000);

        try {
            const docRef = doc(firestore, "bdebebe", JSON.parse(localStorage.getItem("userId")));
            await updateDoc(docRef, {
                disconforme: arrayUnion(`Número: ${num} - ${modal[1]}`)
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`modal ${modal[0] === "init" ? "hidden" : modal[0] === "in" ? "in" : "out"}`}
            onClick={() => setModal("out")}
        >
            <div className="modal-in" onClick={e => e.stopPropagation()}>
                <h4>Hasta aquí llego nuestro stock,<br />en unos días repondremos más.</h4>
                <h5>Dejanos tu número de teléfono para avisarte ni bien repongamos.</h5>
                <div>
                    <input type="number" placeholder="Tu número sin guiones ni espacios"
                        value={num} onChange={e => setNum(e.target.value)}
                    />
                    <button onClick={clic}>
                        <FontAwesomeIcon icon={faPaperPlane}/>
                    </button>
                </div>
                {error[0] && <p className="m-p1">Número incorrecto</p>}
                {error[1] && <p className="m-p2">Número enviado correctamente</p>}
            </div>
        </div>
    )
}

export default Modal