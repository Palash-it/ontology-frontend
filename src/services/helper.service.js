export const getPropertiesFromOntologyConfig = function(ontology, searchProperty){
    if(ontology.hasOwnProperty("config")){
        let property = ontology.config[searchProperty];
        if(!Array.isArray(property)){
            return ontology.config[searchProperty];
        }
        if(property && property.length > 0){
            let key = ontology.ontologyId+'-'+property;
            return (
                <ul className="list">
                    {
                        property.map((li, i) =>
                            <li key={key+'-'+i.toString()}>{li}</li>
                        )
                    }
                </ul> 
            );
        }
    }
}