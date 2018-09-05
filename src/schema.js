import { makeExecutableSchema } from 'apollo-server';

import Entity from './typedefs/entity';
import Project from './typedefs/project';
import Employee from './typedefs/employee';
import Company from './typedefs/company';
import Contact from './typedefs/contact';
import Opportunity from './typedefs/opportunity';
import Inputs from './typedefs/inputs';
/*import Media from './typedefs/media';
import Relationship from './typedefs/relationship';
import StreamItem from './typedefs/streamitem';
import TextLibrary from './typedefs/textlibrary';*/
import EntityColumnMapping from './typedefs/entitycolumnmapping';

import { resolvers } from './resolvers';

/*const Queries = `
  type Query { # This type specifies the entry points into our API.
    entities: [Entity]    # "[]" means this is a list of entities
    company(companyID: ID!): CompanyDetails
    contact(contactID: ID!): ContactDetails
    employee(employeeID: ID!): EmployeeDetails
    opportunity(opportunityID: ID!): OpportunityDetails
    project(projectID: ID!): ProjectDetails
    media(mediaID: ID!): MediaDetails
    streamItem(itemID: Int!): StreamItemDetails
    employeeList: [Employee]
    projectList(perPage: Int): [Project]
    opportunityList(perPage: Int): [Opportunity]
    companyList(perPage: Int): [Company]
    contactList(perPage: Int): [Contact]
    mediaList(perPage: Int): [Media]
    streamItemList(perPage: Int): [StreamItem]
    relationshipList(perPage: Int): [Relationship]
  }
`;*/
const Queries = `
  type Query {
    projects(urlParams: ProjectURLParams): [Entity] #See typedefs/inputs for ProjectURLParams
    project(projectID: ID): Project
    employee(employeeID: ID): Employee
    employees(urlParams: EmployeeURLParams): [Entity]
    company(contactID: ID): Company
    companies(status: String): [Entity]
    contact(contactID: ID): Contact
    contacts(status: String): [Entity]
    opportunity(opportunityID: ID): Opportunity
    opportunities: [Entity]
    entityColumnMappings: [EntityColumnMapping]
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [ Queries,
              Entity,
              ...Project,
              ...Employee,
              ...Company,
              ...Contact,
              ...Opportunity,
              Inputs,
              EntityColumnMapping
              /*Media,
              Relationship,
              TextLibrary,
              StreamItem,
              */
            ],
  resolvers
});
export { schema };
