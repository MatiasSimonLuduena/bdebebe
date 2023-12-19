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

import { products } from "./data"

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
  const [productsData, setProductsData] = useState(products);

  function clicFilter() {
    let filtered = products;

    if (filters.nene) {
      let newFilter = filtered.filter(item => item.sex === "Nene" || item.sex === "Nene/a")
      filtered = newFilter;
    }

    if (filters.nena) {
      let newFilter = filtered.filter(item => item.sex === "Nena" || item.sex === "Nene/a")
      filtered = newFilter;
    }

    filters.talle.forEach((item, index) => {
      if (item) {
        let newFilter = filtered.filter(item => item.talle.includes(index + 1))
        filtered = newFilter;
      }
    })

    if (filters.abrigo) {
      let newFilter = filtered.filter(item => item.categories.includes("Invierno"))
      filtered = newFilter;
    }

    if (filters.verano) {
      let newFilter = filtered.filter(item => item.categories.includes("Verano"))
      filtered = newFilter;
    }

    filters.categoria.forEach((item, index) => {
      const array = ["Shorts", "Bodies", "Remeras", "Pantalon", "Buzos", "Combos"]

      if (item) {
        let newFilter = filtered.filter(item => item.categories.includes(array[index]))
        filtered = newFilter;
      }
    });

    if (filters.shorts) {
      let newFilter = filtered.filter(item => item.categories.includes("Shorts"))
      filtered = newFilter;
    }

    if (filters.bodies) {
      let newFilter = filtered.filter(item => item.categories.includes("Bodies"))
      filtered = newFilter;
    }

    if (filters.remeras) {
      let newFilter = filtered.filter(item => item.categories.includes("Remeras"))
      filtered = newFilter;
    }

    if (filters.pantalones) {
      let newFilter = filtered.filter(item => item.categories.includes("Pantalon"))
      filtered = newFilter;
    }

    if (filters.buzos) {
      let newFilter = filtered.filter(
        item => item.categories.includes("Buzos") || item.categories.includes("Camperas")
      )
      filtered = newFilter;
    }

    if (filters.combos) {
      let newFilter = filtered.filter(item => item.categories.includes("Combos"))
      filtered = newFilter;
    }

    setProductsData(filtered);
  }

  return (
    <Routes>
      <Route path="/bdebebe/sign-in" element={<SignIn/>}/>
      <Route path="/bdebebe/sign-up" element={<SignUp/>}/>
      <Route path="/bdebebe/cart" element={<Cart/>}/>
      <Route path="/bdebebe/check-out" element={<Checkout/>}/>
      <Route path="/bdebebe/" element={
        <>
          {modal && <Modal
            setModal={setModal} clic={clicFilter} filters={filters} setFilters={setFilters}
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
