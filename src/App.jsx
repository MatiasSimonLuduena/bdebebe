// router
import { Routes, Route, Navigate } from "react-router-dom"

// components
import SignUp from "./components/session/SignUp"
import SignIn from "./components/session/SignIn"
import Nav from "./components/nav/Nav"
import Card from "./components/cards/Card"

function App() {
  const session = true;

  return (
    <>
      {session ? (
        <>
          <Nav/>
          <div style={{ height: 75 }}></div>
          <div className="container">
            <Card/>
          </div>
        </>
      ) : (
        <Routes>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/*" element={<Navigate to="/sign-in" />} />
        </Routes>
      )}
    </>
  );
}

export default App
