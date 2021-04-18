import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"

import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'


export const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vh",
    scale: 0.8
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: "100vh",
    scale: 1.1
  }
}

export const pageTransitions = {
  // duration: 0.5,
  type: "spring",
  stiffness: 50
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch >
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/sign-up' exact component={SignUp} />
          </Switch>
        </AnimatePresence>

      </Router>


    </>
  );
}

export default App;
