import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

// database
import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from "./firebase"

// router
import { Routes, Route } from "react-router-dom"

// components
import Quest from "./components/quest/Quest"
import Nav from "./components/nav/Nav"
import Arrow from "./components/arrow/Arrow"
import Modal from "./components/modal/Modal"
import Header from "./components/header/Header"
import Card from "./components/cards/Card"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"

import { 
  bodies, buzos, pants, remeras, shorts, buzosN, bodiesN, pantsN, shirtsN, shortsN
} from "./data"

function App() {
  const productsNene = { buzos: buzos, bodies: bodies, pants: pants, shirt: remeras, shorts: shorts }

  const productsNena = {
    buzos: buzosN, bodies: bodiesN, pants: pantsN, shirt: shirtsN, shorts: shortsN
  }

  const [quest, setQuest] = useState(
    localStorage.getItem("encuesta") ?
    JSON.parse(localStorage.getItem("encuesta")) :
    { sex: false, age: false, talle: false }
  );
  const [init, setInit] = useState(localStorage.getItem("encuesta") ? true : false);
  const [arrow, setArrow] = useState(false);
  const [modal, setModal] = useState("init");

  const state = useSelector(state => state);

  useEffect(() => {
    async function db() {
      try {
        const documentRef = doc(firestore, "bdebebe", JSON.parse(localStorage.getItem("userId")));
        await updateDoc(documentRef, { cart: state });
      } catch (error) {
        console.log(error);
      }
    }
    db();
  }, [state]);

  return (
    <>
      {init ? (
        <Routes>
          <Route path="/bdebebe/cart" element={<Cart/>}/>
          <Route path="/bdebebe/check-out" element={<Checkout/>}/>
          <Route path="/bdebebe/" element={
            <>
              <Modal modal={modal} setModal={setModal}/>
              <Nav/>
              <Arrow arrow={arrow}/>
              <Header/>
              <div className="container">
                <Card products={quest.sex === "nene" ? productsNene : productsNena}
                  setArrow={setArrow} setModal={setModal}
                />
              </div>
            </>
          } />
        </Routes>
      ) : <Quest setQuest={setQuest} quest={quest} setInit={setInit}/>}
    </>
  );
}

export default App
