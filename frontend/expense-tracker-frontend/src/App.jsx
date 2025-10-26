import React from "react"
import Home from "./pages/Dashboard/Home"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Income from  "./pages/Dashboard/Income.jsx"
import Expense from  "./pages/Dashboard/Expense.jsx"


import { BrowserRouter as Router , Routes , Route , Navigate } from "react-router-dom"
import UserProvider  from "./context/UserContext.jsx"

function App() {

  return (
    <UserProvider>
        <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Root />} /> */}
          <Route path="/dashboard"  element={<Home/>} />
          <Route path="/login"  element={<Login />} />
          <Route path="/register"  element={<SignUp />} />
          <Route path="/income"  element={<Income />} />
          <Route path="/expense"  element={<Expense />} />

        </Routes>
      </Router>
    </div>
      </UserProvider>
  )
}

export default App
