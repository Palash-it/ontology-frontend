import http from "./http.service";

class OntologyDataService {
  findAll() {
    return http.get("/ontologies");
  }

  findByOntologyId(ontologyId) {
    return http.get(`/ontologies/${ontologyId}`).catch(error => {
      return error.response;
    });
  }

  create(data) {
    return http.post("/ontologies", data);
  }

  update(ontologyId, data) {
    return http.put(`/ontologies/${ontologyId}`, data);
  }

  delete(ontologyId) {
    return http.delete(`/ontologies/${ontologyId}`);
  }

}

export default new OntologyDataService();
