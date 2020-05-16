import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path ="/contact" component={Contact} />
        <Route component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
