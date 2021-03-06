import './App.css';
import Navbar from './components/Navbar'
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

import Home from './components/pages/Home'
import About from './components/pages/About'
import Deals from './components/pages/Deals'
import Destinations from './components/pages/Destination'
import Subscribe from './components/pages/Subscribe'


function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/deals' component={Deals} />
          <Route path='/destinations' component={Destinations} />
          <Route path='/subscribe' component={Subscribe} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

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

export default App;
