import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Switch ,Route } from "react-router-dom"
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Product'
import SignUp from './components/pages/Signup'


function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/products" component={Products}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
    </Router>
   </>
  )
}

export default App
