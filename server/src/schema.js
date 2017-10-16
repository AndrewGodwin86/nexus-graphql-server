import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import Entity from './typedefs/entity';
import Company from './typedefs/company';
import Contact from './typedefs/contact';
import Employee from './typedefs/employee';
import Media from './typedefs/media';
import Opportunity from './typedefs/opportunity';
import Project from './typedefs/project';
import Relationship from './typedefs/relationship';
import StreamItem from './typedefs/streamitem';
import TextLibrary from './typedefs/textlibrary';
import EntityColumnMapping from './typedefs/entitycolumnmapping';

import { resolvers } from './resolvers';

const Queries = `
  type Query { # This type specifies the entry points into our API.
  	entities: [Entity]    # "[]" means this is a list of entities
  	employeeList: [Employee]
  	projectList(perPage: Int): [Project]
  	opportunityList: [Opportunity]
  	companyList: [Company]
  	contactList: [Contact]
  	streamItemList(perPage: Int): [StreamItem]
  	mediaList: [Media]
  	relationshipList: [Relationship]
  	getProject(projectID: String): ProjectDetails
  	getEmployee(employeeID: String): EmployeeDetails
  	getStreamItem(itemID: Int!): StreamItemDetails
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Queries, Entity, ...Project, ...Employee, Company, Contact, Media, Opportunity, Relationship, TextLibrary, StreamItem, EntityColumnMapping ],
  resolvers
});
export { schema };
