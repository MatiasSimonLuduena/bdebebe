import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

// database
import { doc, updateDoc, collection, addDoc } from 'firebase/firestore';
import { firestore } from "./firebase"

// router
import { Routes, Route } from "react-router-dom"

// components
import Nav from "./components/nav/Nav"
import Arrow from "./components/arrow/Arrow"
import Modal from "./components/modal/Modal"
import Header from "./components/header/Header"
import Card from "./components/cards/Card"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"
import Wsp from "./components/wsp/Wsp";

import { 
  bodies, buzos, pants, remeras, shorts, buzosN, bodiesN, pantsN, shirtsN, shortsN
} from "./data"

function App() {
  const productsNene = { buzos: buzos, bodies: bodies, pants: pants, shirt: remeras, shorts: shorts }

  const productsNena = {
    buzos: buzosN, bodies: bodiesN, pants: pantsN, shirt: shirtsN, shorts: shortsN
  }

  const [final] = useState(localStorage.getItem("final") ? true : false);
  const [arrow, setArrow] = useState(false);
  const [modal, setModal] = useState("init");

  const state = useSelector(state => state);

  useEffect(() => {
    async function init() {
      try {
        if (localStorage.getItem("userId")) {
          return
        }
        
        const newDoc = await addDoc(collection(firestore, "bdebebe2"), { init: true });
        localStorage.setItem("userId", JSON.stringify(newDoc.id));
      } catch (error) {
        console.log(error);
      }
    }
    init()
  }, []);

  useEffect(() => {
    async function db() {
      try {
        const documentRef = doc(firestore, "bdebebe2", JSON.parse(localStorage.getItem("userId")));
        await updateDoc(documentRef, { cart: state });
      } catch (error) {
        console.log(error);
      }
    }
    db();
  }, [state]);

  return (
    <>
      {!final && (
        <Routes>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/check-out" element={<Checkout/>}/>
          <Route path="/" element={
            <>
              <Wsp/>
              <Modal modal={modal} setModal={setModal}/>
              <Nav/>
              <Arrow arrow={arrow}/>
              <Header/>
              <div className="container">
                <Card products={{nene: productsNene, nena: productsNena}}
                  setArrow={setArrow} setModal={setModal}
                />
              </div>
            </>
          } />
        </Routes>
      )}
    </>
  );
}

export default App
