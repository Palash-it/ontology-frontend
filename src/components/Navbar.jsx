import React, { Component } from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Ontologies from "../components/ViewOntologies";
import AddOntology from "../components/AddOntology";

class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/view-ontologies"} className="navbar-brand">
                        Ontology UI
                    </Link>
                    <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/view-ontologies"} className="nav-link">
                        Ontolgoies
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/add-ontology"} className="nav-link">
                        Add Ontology
                        </Link>
                    </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/view-ontologies"]} component={Ontologies} />
                        <Route exact path="/add-ontology" component={AddOntology} />
                    </Switch>
                </div>
            </div>
       );
    }
}
 
export default Navbar;