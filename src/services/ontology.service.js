import http from "./http.service";

class OntologyDataService {
  findAll() {
    return http.get("/ontologies").catch(error => {
      return error.response;
    });
  }

  findByOntologyId(ontologyId) {
    return http.get(`/ontologies/${ontologyId}`).catch(error => {
      return error.response;
    });
  }

  create(data) {
    return http.post("/ontologies", data).catch(error => {
      return error.response;
    });
  }

  update(ontologyId, data) {
    return http.put(`/ontologies/${ontologyId}`, data).catch(error => {
      return error.response;
    });
  }

  delete(ontologyId) {
    return http.delete(`/ontologies/${ontologyId}`).catch(error => {
      return error.response;
    });
  }

}

export default new OntologyDataService();
