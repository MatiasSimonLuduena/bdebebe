import "./check.css"

const Checkout = () => {
    return (
        <div className="check">
            <div className="ch-box">
                <h3>Total a pagar $10.000</h3>
                <p>20 prendas</p>

                <p>Te lo enviamos a domicilio sin costo adicional.</p>
                <div>
                    <input type="text" placeholder="Calle" />
                    <input type="number" placeholder="Altura" />
                    <input type="text" placeholder="Barrio" />
                    <textarea placeholder="Especificaciones"></textarea>
                </div>
            </div>
            <div>
                <p>Una vez finalizado el pedido nos pondremos en contacto con vos via Whatsapp para coordinar envio y pago.</p>
                <button>Finalizar pedido e ir a Whatsapp</button>
            </div>
        </div>
    )
}

export default Checkout