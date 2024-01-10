/* eslint-disable react/prop-types */
import "./card.css"
import { useEffect, useState } from "react"

// database
import { doc, updateDoc, arrayUnion} from 'firebase/firestore';
import { firestore } from "../../firebase"

import { useDispatch, useSelector } from "react-redux"

import { Element } from 'react-scroll';

const Card = ({ products, setArrow, setModal }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [sex, setSex] = useState("nene");

    const { buzos, bodies, pants, shirt, shorts } = products[sex]

    useEffect(() => {
        const storedState = localStorage.getItem("cart");
        if (storedState) {
            dispatch({ type: "LOAD_FROM_LOCALSTORAGE", payload: JSON.parse(storedState) });
        }
    }, [dispatch]);

    async function disconforme(parm) {
        setModal(["in", parm]);
        try {
            const docRef = doc(firestore, "bdebebe", JSON.parse(localStorage.getItem("userId")));
            await updateDoc(docRef, {
                disconforme: arrayUnion(`clic: ${parm}`)
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Element className="container-cards" name="cards">
            <div className="cards-sex">
                <button onClick={() => sex !== "nene" && setSex("nene")}
                    className={sex === "nena" && "button_disabled"}
                >Nene</button>
                <button onClick={() => sex !== "nena" && setSex("nena")}
                    className={sex === "nene" && "button_disabled"}
                >Nena</button>
            </div>
            <h3>Remeras y musculosas</h3>
            <div className="cards">
                {shirt.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
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
                            <p>Talle {item.id % 3 == 0 ? 0 : 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en remeras y musculosas?</p>
                <span onClick={() => disconforme("Remeras")}>Quiero ver más</span>
            </div>
            <h3>Shorts y Mallas</h3>
            <div className="cards">
                {shorts.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
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
                            <p>Talle {item.id % 3 == 0 ? 0 : 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en short y mallas?</p>
                <span onClick={() => disconforme("Shorts")}>Quiero ver más</span>
            </div>
            <h3>Bodies y enteritos</h3>
            <div className="cards">
                {bodies.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
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
                            <p>Talle {item.id % 3 == 0 ? 0 : 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en bodies y enteritos?</p>
                <span onClick={() => disconforme("Bodies")}>Quiero ver más</span>
            </div>
            <h3>Buzos y camperas</h3>
            <div className="cards">
                {buzos.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
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
                            <p>Talle {item.id % 3 == 0 ? 0 : 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en buzos y camperas?</p>
                <span onClick={() => disconforme("Buzos")}>Quiero ver más</span>
            </div>
            <h3>Pantalones</h3>
            <div className="cards">
                {pants.map(item => (
                    <div className="card" key={item.id}
                        onClick={() => {
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
                            <p>Talle {item.id % 3 == 0 ? 0 : 1}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cards-disconforme">
                <p>¿Disconforme con nuestro stock de hoy en pantalones?</p>
                <span onClick={() => disconforme("Pantalones")}>Quiero ver más</span>
            </div>
        </Element>
    );
};

export default Card