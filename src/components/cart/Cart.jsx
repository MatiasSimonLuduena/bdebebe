import { Link } from "react-router-dom";

import "./cart.css"
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            <div className="c-buttons">
                <button onClick={() => dispatch({ type: "DELETE_ALL" })}>Eliminar todo</button>
                <Link to="/bdebebe/check-out"><button>Ir al checkout</button></Link>
            </div>
            <div className="c-box">
                {state.map((item, index) => (
                    <div className="c-card" key={index}>
                        <div>
                            <img src={item.img} alt={item.title} />
                            <p>{ item.title }</p>
                            <p>{ item.sex }</p>
                            <p>★{ item.stars }</p>
                            <p>Talle { item.talle }</p>
                        </div>
                        <button
                            onClick={() => dispatch({ type: "DELETE_ONE", payload: index })}
                        >Eliminar</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart