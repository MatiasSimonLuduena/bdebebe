import "./check.css"

import { useSelector } from "react-redux"
import { useState, useEffect } from "react"

const Checkout = () => {
    const state = useSelector(state => state);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let n = 0
        state.forEach(element => n += element.price);
        setTotal(n);
    }, [state]);

    return (
        <div className="check">
            <h3>Total a pagar ${total} por {state.length} prendas</h3>
            <p>Te lo enviamos a domicilio sin costo adicional.</p>
            <input type="text" placeholder="Calle" />
            <input type="number" placeholder="Altura" />
            <input type="text" placeholder="Barrio" />
            <textarea placeholder="Especificaciones"></textarea>
            <p>
                Una vez finalizado el pedido nos pondremos en contacto con vos via Whatsapp para coordinar envio y pago.
            </p>
            <button>Finalizar pedido e ir a Whatsapp</button>
        </div>
    )
}

export default Checkout