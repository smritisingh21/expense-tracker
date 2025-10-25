import React from "react"
import Home from "./pages/Dashboard/Home"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"


import { BrowserRouter as Router , Routes , Route , Navigate } from "react-router-dom"
import { UserContext } from "./context/UserContext"

function App() {

  return (
    <UserProvider>
        <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Root />} /> */}
          <Route path="/dashboard"  element={<Home/>} />
          <Route path="/login"  element={<Login />} />
          <Route path="/signup"  element={<SignUp />} />

        </Routes>
      </Router>
    </div>
      </UserProvider>
  )
}

export default App
