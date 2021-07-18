import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/home"} className="navbar-brand ">
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
                
            </div>
       );
    }
}
 
export default Navbar;