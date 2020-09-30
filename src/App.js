import React from 'react';
import NavBar from './Components/NavBar'
import Home from './Pages/Home';
import Symptoms from './Pages/Symptoms'
import Graphs from './Pages/Graphs'
import About from './Pages/About'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/symptoms" component={Symptoms} />
          <Route path="/graphs" component={Graphs} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
