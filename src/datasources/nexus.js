import { RESTDataSource } from 'apollo-datasource-rest';

export default class NexusAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://nexus5.knowledge-architecture.com/api/v1';
        this.authValue = Buffer.from(`${process.env.KA_CLIENT_ID}:${process.env.KA_CLIENT_KEY}`)
          .toString('base64');
    }

  willSendRequest(request) {
    // Set auth header for each request
    request.headers.set('Authorization', `Basic ${this.authValue}`);
    console.log(request.path);
  }

  async getEntity(entityType, id) {
    const data = await this.get(`${entityType}/${id}`);
    return data.results[0];
  }

  async getEntityList(entityType, args) {
    // ...args.urlParams is ES6 syntax for destructuing an object
    const data = await this.get(entityType, {...args.urlParams} );
    return data.results;
  }

  async getRelatedEntity(entityType, entityID, relatedEntityType) {
    const data = await this.get(`${entityType}/${entityID}/${relatedEntityType}`).then(d => d["results"]);
    return data;
  }

  async getRelationships(args){
    const data = await this.get('relationships',{...args.urlParams});
    return data.results;
  }

  async getEntityColumnMappings(){
    const data = await this.get('entitycolumnmappings');
    return data.results;
  }

}