/* eslint-disable react/prop-types */
import "./quest.css"
import { useState } from "react"

import { collection, addDoc } from "firebase/firestore"
import { firestore } from "../../firebase"

const Quest = ({ setQuest, quest, setInit }) => {
    const [load, setLoad] = useState(false);

    async function clic() {
        try {
            setLoad(true);
            const newDoc = await addDoc(collection(firestore, "bdebebe"), { encuesta: quest });
            localStorage.setItem("encuesta", JSON.stringify(quest));
            localStorage.setItem("userId", JSON.stringify(newDoc.id));
            setInit(true);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="quest">
        {load && 
            <div className="quest-load">
                <div className="quest-loader"></div>
            </div>
        }
        <h3>
            Antes de mostrarte los productos, por favor, responde estas preguntas para poder personalizar el catálogo según tus necesidades. ¡Gracias!
        </h3>
        <div className="quest-div">
            <h4>Sexo de tu bebé</h4>
            <div>
                <input type="checkbox" id="nene" checked={quest.sex === "nene"}
                    onChange={() => setQuest({...quest, sex: "nene"})}
                />
                <label htmlFor="nene">Niño</label>
            </div>
            <div>
                <input type="checkbox" id="nena" checked={quest.sex === "nena"}
                    onChange={() => setQuest({...quest, sex: "nena"})}
                />
                <label htmlFor="nena">Niña</label>
            </div>
        </div>
        <div className="quest-div">
            <h4>Edad de tu bebé</h4>
            <div>
                <input type="checkbox" id="e3" checked={quest.age === "0 a 3"}
                    onChange={() => setQuest({...quest, age: "0 a 3"})}
                />
                <label htmlFor="e3">0 a 3 meses</label>
            </div>
            <div>
                <input type="checkbox" id="e6" checked={quest.age === "3 a 9"}
                    onChange={() => setQuest({...quest, age: "3 a 9"})}
                />
                <label htmlFor="e6">3 a 9 meses</label>
            </div>
            <div>
                <input type="checkbox" id="e9" checked={quest.age === "9 a 12"}
                    onChange={() => setQuest({...quest, age: "9 a 12"})}
                />
                <label htmlFor="e9">9 a 12 meses</label>
            </div>
            <div>
                <input type="checkbox" id="e12" checked={quest.age === "12 a 18"}
                    onChange={() => setQuest({...quest, age: "12 a 18"})}
                />
                <label htmlFor="e12">12 a 18 meses</label>
            </div>
            <div>
                <input type="checkbox" id="emas" checked={quest.age === "mas"}
                    onChange={() => setQuest({...quest, age: "mas"})}
                />
                <label htmlFor="emas">Más</label>
            </div>
        </div>
        <div className="quest-div">
            <h4>Talle</h4>
            <div>
                <input type="checkbox" id="t0" checked={quest.talle === "0"}
                    onChange={() => setQuest({...quest, talle: "0"})}
                />
                <label htmlFor="t0">0</label>
            </div>
            <div>
                <input type="checkbox" id="t1" checked={quest.talle === "1"}
                    onChange={() => setQuest({...quest, talle: "1"})}
                />
                <label htmlFor="t1">1</label>
            </div>
            <div>
                <input type="checkbox" id="t2" checked={quest.talle === "2"}
                    onChange={() => setQuest({...quest, talle: "2"})}
                />
                <label htmlFor="t2">2</label>
            </div>
            <div>
                <input type="checkbox" id="t3" checked={quest.talle === "3"}
                    onChange={() => setQuest({...quest, talle: "3"})}
                />
                <label htmlFor="t3">3</label>
            </div>
            <div>
                <input type="checkbox" id="t4" checked={quest.talle === "4"}
                    onChange={() => setQuest({...quest, talle: "4"})}
                />
                <label htmlFor="t4">4</label>
            </div>
            <div>
                <input type="checkbox" id="t5" checked={quest.talle === "5"}
                    onChange={() => setQuest({...quest, talle: "5"})}
                />
                <label htmlFor="t5">5</label>
            </div>
            <div>
                <input type="checkbox" id="t6" checked={quest.talle === "6"}
                    onChange={() => setQuest({...quest, talle: "6"})}
                />
                <label htmlFor="t6">6</label>
            </div>
            <div>
                <input type="checkbox" id="tmas" checked={quest.talle === "mas"}
                    onChange={() => setQuest({...quest, talle: "mas"})}
                />
                <label htmlFor="tmas">Más</label>
            </div>
        </div>
        {quest.sex && quest.age && quest.talle ? (
            <button onClick={clic} className="quest-b1">Continuar</button>
        ) : (
            <button className="quest-b2">Continuar</button>
        )}
    </div>
  )
}

export default Quest