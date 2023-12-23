import "./check.css"

import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

// database
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from "../../firebase"

const Checkout = () => {
    const state = useSelector(state => state);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let n = 0
        state.forEach(element => n += element.price);
        setTotal(n);
    }, [state]);

    async function clic() {
        try {
            const docRef = doc(firestore, "bdebebe", JSON.parse(localStorage.getItem("userId")));
            await updateDoc(docRef, { checkout: "FINALIZADO!" });
            window.location.href = "https://w.app/PIGyXa"
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="check">
            <h3>Total a pagar ${total} por {state.length} prendas</h3>
            <p>Te lo enviamos a domicilio sin costo adicional.</p>
            <p>
                Una vez finalizado el pedido nos pondremos en contacto con vos via Whatsapp para coordinar envio, dirección y pago.
            </p>
            <button onClick={clic}>Finalizar pedido e ir a Whatsapp</button>
        </div>
    )
}

export default Checkout