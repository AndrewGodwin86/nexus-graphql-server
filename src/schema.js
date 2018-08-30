import { makeExecutableSchema } from 'apollo-server';

import Entity from './typedefs/entity';
import Project from './typedefs/project';
import Employee from './typedefs/employee';
import Company from './typedefs/company';
import Contact from './typedefs/contact';
import Opportunity from './typedefs/opportunity';
/*import Media from './typedefs/media';
import Relationship from './typedefs/relationship';
import StreamItem from './typedefs/streamitem';
import TextLibrary from './typedefs/textlibrary';
import EntityColumnMapping from './typedefs/entitycolumnmapping';*/

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
    projects(perPage: Int, status: String, country: String, name: String): [Entity]
    project(projectID: ID): Project
    employee(employeeID: ID): Employee
    employees(status: String): [Entity]
    company(contactID: ID): Company
    companies(status: String): [Entity]
    contact(contactID: ID): Contact
    contacts(status: String): [Entity]
    opportunity(opportunityID: ID): Opportunity
    opportunities: [Entity]
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
              /*Media,
              Relationship,
              TextLibrary,
              StreamItem,
              EntityColumnMapping*/
            ],
  resolvers
});
export { schema };
