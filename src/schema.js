import { makeExecutableSchema } from 'apollo-server';

import Entity from './typedefs/entity';
import Project from './typedefs/project';
import Employee from './typedefs/employee';
import Company from './typedefs/company';
import Contact from './typedefs/contact';
import Opportunity from './typedefs/opportunity';
import Inputs from './typedefs/inputs';
import Relationship from './typedefs/relationship';
import TextLibrary from './typedefs/textlibrary';
/*import Media from './typedefs/media';
import StreamItem from './typedefs/streamitem';*/
import EntityColumnMapping from './typedefs/entitycolumnmapping';

import { resolvers } from './resolvers';

const Queries = `
  type Query { # This type specifies the entry points into our API.
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
    relationships(urlParams: RelationshipURLParams): [Relationship]
    textLibraries(urlParams: TextLibraryURLParams): [Entity]
    textLibrary(textLibraryID: ID): TextLibrary
    #media(urlParams: MediaURLParams): [Media]
    #streamItems(urlParams: StreamItemURLParams): [StreamItem]
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
              EntityColumnMapping,
              Relationship,
              TextLibrary,
              /*Media,
              StreamItem,
              */
            ],
  resolvers
});
export { schema };
