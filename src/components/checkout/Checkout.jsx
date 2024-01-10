import "./check.css"

import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

// database
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from "../../firebase"

const Checkout = () => {
    const state = useSelector(state => state);
    const [total, setTotal] = useState(0);
    const [inputs, setInputs] = useState({ calle: "", barrio: "" });

    useEffect(() => {
        let n = 0
        state.forEach(element => n += element.price);
        setTotal(n);
    }, [state]);

    async function clic() {
        try {
            const docRef = doc(firestore, "bdebebe2", JSON.parse(localStorage.getItem("userId")));
            await updateDoc(docRef, { checkout: "FINALIZADO!", address: inputs });
            localStorage.setItem("final", "true");
            window.location.href = "https://wa.me/543518147093?text=He%20finalizado%20un%20pedido%20por%20el%20sitio%20web"
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="check">
            <h3>Total a pagar ${total} por {state.length} prendas</h3>
            <div className="check_inputs">
                <p>Escribe tu dirección para poder hacerte el envio</p>
                <input type="text" placeholder="Calle y altura"
                    value={inputs.calle}
                    onChange={e => setInputs({...inputs, calle: e.target.value})}
                />
                <input type="text" placeholder="Barrio"
                    value={inputs.barrio}
                    onChange={e => setInputs({...inputs, barrio: e.target.value})}
                />
            </div>
            <p>
                Una vez finalizado el pedido nos pondremos en contacto con vos via Whatsapp para coordinar envio y pago.
            </p>
            {inputs.calle.length > 0 && inputs.barrio.length > 0 ? (
                <button onClick={clic}
                    className="check-btn_true"
                >Finalizar pedido e ir a Whatsapp</button>
            ) : <button className="check-btn_false">Finalizar pedido e ir a Whatsapp</button>}
        </div>
    )
}

export default Checkout