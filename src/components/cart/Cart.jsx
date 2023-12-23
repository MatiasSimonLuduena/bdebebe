import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import "./cart.css"
import { useDispatch, useSelector } from 'react-redux';

// database
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from "../../firebase"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faTrash } from "@fortawesome/free-solid-svg-icons"

const Cart = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let n = 0;
        state.forEach(element => n += element.price);
        setTotal(n);
    }, [state]);

    async function clic() {
        try {
            const docRef = doc(firestore, "bdebebe", JSON.parse(localStorage.getItem("userId")));
            await updateDoc(docRef, { checkout: true });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="cart">
            <div className="cart-nav">
                <Link to="/bdebebe/"><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <div>
                    <button onClick={() => dispatch({ type: "DELETE_ALL" })}>
                        <FontAwesomeIcon icon={faTrash}/>
                    </button>
                    {total > 5000 && <Link to="/bdebebe/check-out" onClick={clic}>Comprar</Link>}
                </div>
            </div>
            {total < 5000 && 
                <p className="cart-minimo">
                    El monto mínimo de compra son $5.000, regresa para seguir eligiendo.
                </p>
            }
            <div className="cart-cards">
                {state.map((item, index)=> (<>
                    <div key={item.id} className="cart-card">
                        <img src={item.img} alt={item.title} />
                        <h6>{item.title}</h6>
                        <p>${item.price}</p>
                        <button onClick={() => dispatch({ type: "DELETE_ONE", payload: index })}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                    <hr />
                </>))}
            </div>
            <div className="cart-total">
                <p>Monto total a pagar son ${total}</p>
                {total > 5000 && <Link to="/bdebebe/check-out" onClick={clic}>Comprar ahora</Link>}
            </div>
        </div>
    )
}

export default Cart