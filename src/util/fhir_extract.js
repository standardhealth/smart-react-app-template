import {RESOURCES} from './patient';

/**
 * There are slight discrepencies between the $everything, revinclude, and manual methods that affect the resources that might be returned
 * @param {Object} client - the fhir client
 * @param {function} callback - function to send data to when promise resolves
 */
function getPatientRecord(client, callback) {
    client.request(`/metadata`).then((statement)=>{
        if (statement.rest[0].operation.filter((e)=>{ return (e.definition.reference || e.definition) ==="OperationDefinition/Patient--everything"}).length>0) {
            // supports patient everything
            getEverything(client, callback);
        } else {
            const supportedResources = [];
            let revIncludeResources = [];
            statement.rest[0].resource.forEach((resource)=>{
                if (resource.type === "Patient") {
                    if (resource.searchRevInclude) {
                        revIncludeResources = resource.searchRevInclude
                    }
                } else if (resource.searchInclude) {
                    const filters = resource.searchInclude.filter((target)=>{return target === `${resource.type}:patient` || target === `${resource.type}:subject`})
                    if (filters.length > 0) {
                        supportedResources.push(filters[0]);
                    }
                } else if (resource.searchParam){
                    const filters = resource.searchParams.filter((target)=>{return target.name === `patient` || target.name === `subject`});
                    if (filters.length > 0) {
                        supportedResources.push(`${resource.type}:${filters[0].name}`);
                    }
                }

            })
            if (revIncludeResources.length > 0) {
                getEverythingRevInclude(client, revIncludeResources, callback);
            } else {
                getEverythingRevInclude(client, supportedResources, callback);
            }

        }
    })
}

/**
 * Uses the $everything operation.  The server takes care of constructing the bundle that gets returned, so
 * it is generally not possible to know how it is deciding what resources to send.
 */
function getEverything(client, callback) {
    client.request(`/Patient/${client.patient.id}/$everything`, {flat: true, pageLimit:0}).then((bundle)=>{
        callback("patientRecord", bundle);
    })

}

/**
 * Uses regular FHIR search queries on every resource that is supported and can refer to a patient.  
 * Which resources it queries is dependent on info available in the Capability Statement, and
 * it only provides a one layer deep search, so the results might be different from $everything.
 */
function getEverythingManually(client, supportedResources, callback) {
    supportedResources.push("Patient:_id");
    const requests = [];
    supportedResources.forEach((resource)=>{
        resource = resource.split(":");
        const request = client.request(`${resource[0]}?${resource[1]}=${client.patient.id}`, {flat: true, pageLimit:0}).then((result) =>{
            if (result.length > 0) {
                return result;
            }
        }).catch((error)=>{
            console.log(`failed to fetch ${resource}`)
        });
        requests.push(request);
    });

    Promise.all(requests).then((results) => {
        const bundle = results.filter((x)=>{return x}).flat();
        callback("patientRecord", bundle);
    })

}

/**
 * Uses the _revinclude FHIR search parameter to request the patient resource and any resource that refers to it. 
 * The list of resources it checks is retrieved from the Capability Statement.  It is slightly better than the manual
 * method since it does everything in one request.
 */
function getEverythingRevInclude(client, supportedResources, callback) {
    const query = supportedResources.join("&_revinclude=");
    if (query) {
        client.request(`/Patient?_id=${client.patient.id}&_revinclude=${query}`, {flat: true}).then((result)=>{
            callback("patientRecord", result);
        }).catch((error) =>{
            getEverythingManually(client, supportedResources, callback);
        });
    } else {
        getEverythingManually(client, RESOURCES, callback);
    }

}

export {
    getPatientRecord
}