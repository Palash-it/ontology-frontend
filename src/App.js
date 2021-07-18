import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './custom-style.css';
import React, { Component } from "react";
import {Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Ontologies from "./components/ViewOntologies";
import AddOntology from "./components/AddOntology";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "home",
    };
  }

  pageInfoUpdate = (state) => {
    this.setState({
      pageTitle: state.page,
      activeMenu: state.activeMenu,
    });
  }

  render() {
    return (
      <>
      <Navbar/>
      <div className="container mt-3">
          <Switch>
              <Route exact path={["", "/home"]} component={Home} />
              <Route exact path="/view-ontologies" component={Ontologies} />
              <Route exact path="/add-ontology" component={AddOntology} />
          </Switch>
      </div>
      <div className = "row mt-4">
        <footer>
          <div className="col-md-12 text-center">Developed By Ontology Team Candidate</div>
        </footer>
      </div>
      </>
    );
  }
}
export default App;
