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

import { productsNene, productsNena } from "./data"

function App() {
  const [productsData, setProductsData] = useState(productsNene);

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
            <Card products={productsData}/>
          </div>
        </>
      } />
    </Routes>
  );
}

export default App
