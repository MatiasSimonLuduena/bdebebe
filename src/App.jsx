import { useState } from "react"

// router
import { Routes, Route } from "react-router-dom"

// components
import SignUp from "./components/session/SignUp"
import SignIn from "./components/session/SignIn"
import Nav from "./components/nav/Nav"
import Search from "./components/search/Search"
import Modal from "./components/search/Modal"
import Card from "./components/cards/Card"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"

import { productsNene, productsNena } from "./data"

function App() {
  const [modal, setModal] = useState(false);
  const [filters, setFilters] = useState({
    nene: false,
    nena: false,
    talle: [
      false, false, false, false, false, false
    ],
    abrigo: false,
    verano: false,
    categoria: [
      false, false, false, false, false, false
    ]
  });

  const [productsData, setProductsData] = useState(productsNene);

  return (
    <Routes>
      <Route path="/bdebebe/sign-in" element={<SignIn/>}/>
      <Route path="/bdebebe/sign-up" element={<SignUp/>}/>
      <Route path="/bdebebe/cart" element={<Cart/>}/>
      <Route path="/bdebebe/check-out" element={<Checkout/>}/>
      <Route path="/bdebebe/" element={
        <>
          {modal && <Modal
            setModal={setModal} filters={filters} setFilters={setFilters}
          />}
          <Nav/>
          <div style={{ height: 75 }}></div>
          <div className="container">
            <Search setModal={setModal}/>
            <Card products={productsData}/>
          </div>
        </>
      } />
    </Routes>
  );
}

export default App
