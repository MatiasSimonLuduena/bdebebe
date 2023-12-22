import { useState } from "react"

// router
import { Routes, Route } from "react-router-dom"

// components
import SignUp from "./components/session/SignUp"
import SignIn from "./components/session/SignIn"
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
  const productsNene = {
    buzos: buzos, bodies: bodies, pants: pants, shirt: remeras, shorts: shorts
  };

  const productsNena = {
    buzos: buzosN, bodies: bodiesN, pants: pantsN, shirt: shirtsN, shorts: shortsN
  }

  const [quest] = useState({ sex: "Nena" });
  const [arrow, setArrow] = useState(false);
  const [modal, setModal] = useState("init");

  return (
    <Routes>
      <Route path="/bdebebe/sign-in" element={<SignIn/>}/>
      <Route path="/bdebebe/sign-up" element={<SignUp/>}/>
      <Route path="/bdebebe/cart" element={<Cart/>}/>
      <Route path="/bdebebe/check-out" element={<Checkout/>}/>
      <Route path="/bdebebe/" element={
        <>
          <Modal modal={modal} setModal={setModal}/>
          <Nav/>
          <Arrow arrow={arrow}/>
          <Header/>
          <div className="container">
            <Card products={quest === "Nene" ? productsNene : productsNena}
              setArrow={setArrow} setModal={setModal}
            />
          </div>
        </>
      } />
    </Routes>
  );
}

export default App
