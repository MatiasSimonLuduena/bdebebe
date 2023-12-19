/* eslint-disable react/prop-types */
import "./card.css"
import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"

const Card = ({ products }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    useEffect(() => {
        const storedState = localStorage.getItem("cart");
        if (storedState) {
            dispatch({ type: "LOAD_FROM_LOCALSTORAGE", payload: JSON.parse(storedState) });
        }
    }, [dispatch]);

    return (
        <div className="cards">
            {products.map((item, index) => (
                <div className="card" key={index}
                    onClick={() => dispatch({ type: "ADD", payload: item })}
                >
                    {state.some(cartItem => cartItem.id === item.id) &&
                    <div className="card-capa"></div>}
                    <img src={item.img} alt={item.title} />
                    <div>
                        <h4>{item.title}</h4>
                        <p>★{item.stars}</p>
                    </div>
                    <div>
                        <p>{item.sex}</p>
                        <p>Talle {item.talle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card