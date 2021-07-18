import React, { Component } from 'react';
import OntologyService from "../services/ontology.service";
import { getPropertiesFromOntologyConfig } from "../services/helper.service";

class ViewOntologies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ontologies:[],
            ontologyId : "",
            sysMsg : {
                type : "",
                msg : ""
            },
        };
    }

    componentDidMount(){
        OntologyService.findAll().then((res) => {
            this.setState({ ontologies: res.data});
        });
    };

    render() { 
        let { ontologies } = this.state;
        return ( 
            <div className="container">
                 <h2 className="text-center">Ontologies </h2>
                <div className = "row">
                    <div className = "col-md-12">
                    </div>
                    <div className = "col-md-12">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>OntologyId</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Definition Properties</th>
                                    <th>Synonym Properties</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    ontologies.map(ontology => 
                                        <tr key = {ontology.ontologyId}>
                                            <td>{ontology.ontologyId}</td>
                                            <td>{ontology.message}</td>
                                            <td>{ontology.status}</td>
                                            <td>{getPropertiesFromOntologyConfig(ontology,"title")}</td>
                                            <td>{getPropertiesFromOntologyConfig(ontology,"description")}</td>
                                            <td>{getPropertiesFromOntologyConfig(ontology,"definitionProperties")}</td>
                                            <td>{getPropertiesFromOntologyConfig(ontology,"synonymProperties")}</td>
                                            <td>
                                                <button onClick={ () => this.editOntology(ontology.ontologyId)} className="btn btn-info">Update </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ViewOntologies;