import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>


    </>
  );
}

export default App;