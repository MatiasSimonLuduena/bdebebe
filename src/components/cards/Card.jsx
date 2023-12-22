/* eslint-disable react/prop-types */
import "./card.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux"

import { Element } from 'react-scroll';

const Card = ({ products, setArrow, setModal }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const navigate = useNavigate();
    const { talle } = JSON.parse(localStorage.getItem("encuesta"));

    const { buzos, bodies, pants, shirt, shorts } = products

    useEffect(() => {
        const storedState = localStorage.getItem("cart");
        if (storedState) {
            dispatch({ type: "LOAD_FROM_LOCALSTORAGE", payload: JSON.parse(storedState) });
        }
    }, [dispatch]);

    return (
        <Element className="container-cards" name="cards">
            <h3>Remeras y musculosas</h3>
            <div className="cards">
                {shirt.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
                            if (!localStorage.getItem("session")) {
                                navigate('/bdebebe/sign-up');
                                return
                            }
                            dispatch({ type: "ADD", payload: item });

                            if (!state.some(stateItem => stateItem.img === item.img)) {
                                setArrow(true);
                                setTimeout(() => setArrow(false), 3000);
                            }
                        }}
                    >
                        {state.some(cartItem => cartItem.id === item.id) &&
                            <div className="card-capa">Reservado</div>
                        }
                        <img src={item.img} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <p>Nene</p>
                            <p>Talle { talle }</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en remeras y musculosas?</p>
                <span onClick={() => setModal("in")}>Quiero ver más</span>
            </div>
            <h3>Shorts y Mallas</h3>
            <div className="cards">
                {shorts.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
                            if (!localStorage.getItem("session")) {
                                navigate('/bdebebe/sign-up');
                                return
                            }
                            dispatch({ type: "ADD", payload: item });

                            if (!state.some(stateItem => stateItem.img === item.img)) {
                                setArrow(true);
                                setTimeout(() => setArrow(false), 3000);
                            }
                        }}
                    >
                        {state.some(cartItem => cartItem.id === item.id) &&
                            <div className="card-capa">Reservado</div>
                        }
                        <img src={item.img} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <p>Nene</p>
                            <p>Talle { talle }</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en short y mallas?</p>
                <span onClick={() => setModal("in")}>Quiero ver más</span>
            </div>
            <h3>Bodies y enteritos</h3>
            <div className="cards">
                {bodies.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
                            if (!localStorage.getItem("session")) {
                                navigate('/bdebebe/sign-up');
                                return
                            }
                            dispatch({ type: "ADD", payload: item });

                            if (!state.some(stateItem => stateItem.img === item.img)) {
                                setArrow(true);
                                setTimeout(() => setArrow(false), 3000);
                            }
                        }}
                    >
                        {state.some(cartItem => cartItem.id === item.id) &&
                            <div className="card-capa">Reservado</div>
                        }
                        <img src={item.img} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <p>Nene</p>
                            <p>Talle { talle }</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en bodies y enteritos?</p>
                <span onClick={() => setModal("in")}>Quiero ver más</span>
            </div>
            <h3>Buzos y camperas</h3>
            <div className="cards">
                {buzos.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
                            if (!localStorage.getItem("session")) {
                                navigate('/bdebebe/sign-up');
                                return
                            }
                            dispatch({ type: "ADD", payload: item });

                            if (!state.some(stateItem => stateItem.img === item.img)) {
                                setArrow(true);
                                setTimeout(() => setArrow(false), 3000);
                            }
                        }}
                    >
                        {state.some(cartItem => cartItem.id === item.id) &&
                            <div className="card-capa">Reservado</div>
                        }
                        <img src={item.img} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <p>Nene</p>
                            <p>Talle { talle }</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en buzos y camperas?</p>
                <span onClick={() => setModal("in")}>Quiero ver más</span>
            </div>
            <h3>Pantalones</h3>
            <div className="cards">
                {pants.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
                            if (!localStorage.getItem("session")) {
                                navigate('/bdebebe/sign-up');
                                return
                            }
                            dispatch({ type: "ADD", payload: item });

                            if (!state.some(stateItem => stateItem.img === item.img)) {
                                setArrow(true);
                                setTimeout(() => setArrow(false), 3000);
                            }
                        }}
                    >
                        {state.some(cartItem => cartItem.id === item.id) &&
                            <div className="card-capa">Reservado</div>
                        }
                        <img src={item.img} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>${item.price}</p>
                        </div>
                        <div>
                            <p>Nene</p>
                            <p>Talle { talle }</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en pantalones?</p>
                <span onClick={() => setModal("in")}>Quiero ver más</span>
            </div>
        </Element>
    );
};

export default Card