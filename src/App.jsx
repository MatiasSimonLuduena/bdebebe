// router
import { Routes, Route } from "react-router-dom"

// components
import SignUp from "./components/session/SignUp"
import SignIn from "./components/session/SignIn"
import Nav from "./components/nav/Nav"
import Card from "./components/cards/Card"
import Cart from "./components/cart/Cart"
import Checkout from "./components/checkout/Checkout"

function App() {
  return (
    <Routes>
      <Route path="/bdebebe/sign-in" element={<SignIn/>}/>
      <Route path="/bdebebe/sign-up" element={<SignUp/>}/>
      <Route path="/bdebebe/cart" element={<Cart/>}/>
      <Route path="/bdebebe/check-out" element={<Checkout/>}/>
      <Route path="/bdebebe/" element={
        <>
          <Nav/>
          <div style={{ height: 75 }}></div>
          <div className="container">
            <Card/>
          </div>
        </>
      } />
    </Routes>
  );
}

export default App
