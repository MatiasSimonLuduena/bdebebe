import { useState } from "react"

// router
import { Routes, Route } from "react-router-dom"

// components
import SignUp from "./components/session/SignUp"
import SignIn from "./components/session/SignIn"
import Nav from "./components/nav/Nav"
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

  const [quest, setQuest] = useState({ sex: "Nena" }); 

  return (
    <Routes>
      <Route path="/bdebebe/sign-in" element={<SignIn/>}/>
      <Route path="/bdebebe/sign-up" element={<SignUp/>}/>
      <Route path="/bdebebe/cart" element={<Cart/>}/>
      <Route path="/bdebebe/check-out" element={<Checkout/>}/>
      <Route path="/bdebebe/" element={
        <>
          <Nav/>
          <Header/>
          <div className="container">
            <Card products={quest === "Nene" ? productsNene : productsNena}/>
          </div>
        </>
      } />
    </Routes>
  );
}

export default App
