import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './custom-style.css';
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ontologies from "./components/ViewOntologies";

class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className = "container">
        <div className = "row">
          <Home/>
          <Ontologies/>
        </div>
      </div>
      </>
    );
  }
}
export default App;
