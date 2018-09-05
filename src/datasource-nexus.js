import { RESTDataSource } from 'apollo-datasource-rest';

export default class NexusAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://nexus5.knowledge-architecture.com/api/v1';
    }

  willSendRequest(request) {
    // function to base64 encode a string using Buffer
    const btoa = function(str) {
        return Buffer.from(str).toString('base64');
    }
    // Encode ClientID:ClientKey to use in request headers
    const authorizationB64 = btoa(process.env.KA_CLIENT_ID + ':' + process.env.KA_CLIENT_KEY);
    const authHeader = 'Basic '+ authorizationB64;
    request.headers.set('Authorization', authHeader);
  }

  async getEntity(entityType, id) {
    const data = await this.get(`${entityType}/${id}`);
    return data.results[0];
  }

  async getEntityList(entityType, args) {
    const data = await this.get(entityType, {...args.urlParams} );
    return data.results;
  }

  async getProjectList(entityType, args) {
    // ...args.urlParams is ES6 syntax for destructuing an object
    const data = await this.get(entityType, {...args.urlParams})  
    return data.results;
  }

  async getRelatedEntity(entityType, entityID, relatedEntityType) {
    const data = this.get(`${entityType}/${entityID}/${relatedEntityType}`).then(d => d["results"]);
    return data;
  }

}