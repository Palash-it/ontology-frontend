import React, { Component } from 'react';
import OntologyService from "../services/ontology.service";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResult: {},
            isLoading: false,
            ontologyId : "",
            sysMsg : {
                type : "",
                msg : ""
            }
        };
    }

    handleInputChange = e => {
        this.setState({
            ontologyId: e.target.value
        });
    };

    searchOntology = e => {
        let { ontologyId } = this.state;
        if(ontologyId !== ""){
            this.setState({
                sysMsg : {
                    type : "info",
                    msg : "Please wait.. searching intology for :"+ontologyId
                }
            });
            OntologyService.findByOntologyId(ontologyId).then((res) => {
                if(res.status === 200){
                    this.setState({
                        searchResult : res.data,
                        sysMsg : {
                            type : "success",
                            msg : "Result found by Ontology ID :"+ontologyId
                        }
                    });
                } else {
                    this.setState({
                        searchResult : {},
                        sysMsg : {
                            type : "danger",
                            msg : res.data.message
                        }
                    });
                }
            });
        } else {
            this.setState({
                sysMsg : {
                    type : "danger",
                    msg : "Please provide ontology ID"
                }
            });
        }
    };
    
    getConfigProperties(data,searchElement) {
        if(data.hasOwnProperty("config")){
            let property = data.config[searchElement];
            if(!Array.isArray(property)){
                return data.config[searchElement];
            }
            if(property && property.length > 0){
                return (
                    <ul className="list">{property.map((li, i) => <li key={i}>{li}</li>)}</ul> 
                );
            }
        }
    }

    getList(property){
        return (
            property.forEach((element, index) => (
                <li key={index}>{element}</li>
            ))
        );
    }


    render() { 
        let { searchResult, ontologyId, sysMsg } = this.state;
        return ( 
            <div className="col-md-12">
                <div className="search-section mb-3">
                    <div className="row">
                        <div className="col-md-4">
                            <input type="search" name="ontologyId" className="form-control" 
                                placeholder="Search by ontology Id" 
                                onChange={this.handleInputChange}
                                value = {ontologyId}/>
                        </div>
                        <div className="col-md-1">
                            <i className="fas fa-search"></i>
                            <button className="btn btn-primary" onClick={this.searchOntology}>Search</button>
                        </div>
                        <label className={'col-md-7 pull-left text-'+sysMsg["type"]}>{sysMsg["msg"]}</label>
                    </div>
                </div>

                <div className="search-result" >
                    <h4>Ontology Search Result : </h4>
                    <div className = "row">
                        <div className = "col-md-8">
                            <table className = "table table-striped table-bordered">
                                <tbody>
                                    <tr>
                                        <td>ontologyId</td>
                                        <td>{searchResult.ontologyId}</td>
                                    </tr>
                                    <tr>
                                        <td>Message</td>
                                        <td>{searchResult.message}</td>
                                    </tr>
                                    <tr>
                                        <td>Status</td>
                                        <td>{searchResult.status}</td>
                                    </tr>
                                    <tr>
                                        <td>title</td>
                                        <td>{this.getConfigProperties(searchResult,"title")}</td>
                                    </tr>
                                    <tr>
                                        <td>Description</td>
                                        <td>{this.getConfigProperties(searchResult,"description")}</td>
                                    </tr>
                                    <tr>
                                        <td>Definition Properties</td>
                                        <td>{this.getConfigProperties(searchResult,"definitionProperties")}</td>
                                    </tr>
                                    <tr>
                                        <td>Synonym Properties</td>
                                        <td>{this.getConfigProperties(searchResult,"synonymProperties")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;