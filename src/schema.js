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
    projects(
      perPage: Int,
      pageNum: Int,
      status: String,
      name: String,
      chargeType: String,
      city: String,
      clientID: String,
      clientName: String,
      #minCompanyCount: Int,
      contractor: String,
      country: String,
      LEEDCertificationLevel: String,
      LEEDCertificationStatus: String,
      LEEDProgram: String,
      LEEDProject: String,
      loB_PR_CustTxt01: String,
      loB_PR_CustTxt02: String,
      loB_PR_CustTxt03: String,
      loB_PR_CustTxt04: String,
      loB_PR_CustTxt05: String,
      loB_PR_CustVar01: String,
      loB_PR_CustVar02: String,
      loB_PR_CustVar03: String,
      loB_PR_CustVar04: String,
      loB_PR_CustVar05: String,
      loB_PR_CustVar06: String,
      loB_PR_CustVar07: String,
      loB_PR_CustVar08: String,
      loB_PR_CustVar09: String,
      loB_PR_CustVar10: String,
      loB_PR_CustVar11: String,
      loB_PR_CustVar12: String,
      loB_PR_CustVar13: String,
      loB_PR_CustVar14: String,
      loB_PR_CustVar15: String,
      loB_ProjectPlan: String,
      marketingName: String,
      marketingTier: String,
      office: String,
      org: String,
      orgName: String,
      parentProject: String,
      parentProjectNumber: String,
      pic: String,
      picNumber: String,
      piM_EntityCategory: String,
      piM_EntityID: String,
      #piM_PR_CustDat01: String,
      #piM_PR_CustNum01: Float,
      piM_PR_CustTxt01: String,
      piM_PR_CustTxt02: String,
      piM_PR_CustTxt03: String,
      piM_PR_CustVar01: String,
      piM_PR_CustVar02: String,
      piM_PR_CustVar03: String,
      piM_PR_CustVar04: String,
      piM_PR_CustVar05: String,
      piM_ProjectRecord: String,
      piM_ProjectWebsite: String,
      #profileLastModifiedBy: String,
      projectAliases: String,
      projectDeliveryMethod: String,
      projectFolderLocation: String,
      projectInDAMSystem: String,
      projectInLOBSystem: String,
      projectInPIMSystem: String,
      projectManager: String,
      projectManagerNumber: String,
      projectName: String,
      projectNumberDisplay: String,
      projectPhase: String,
      projectProfile_Custom01: String,
      projectProfile_Custom02: String,
      projectProfile_Custom03: String,
      projectProfile_Custom04: String,
      projectProfile_Custom05: String,
      projectProfile_Custom06: String,
      projectProfile_Custom07: String,
      projectProfile_Custom08: String,
      projectProfile_Custom09: String,
      projectProfile_Custom10: String,
      projectRole: String,
      projectType: String,
      publicSector: String,
      sourceSystem: String,
      #squareFootage: Int,
      state: String,
      status: String,
      streetAddress1: String,
      streetAddress2: String,
      streetAddress3: String,
      streetAddress4: String,
      #totalProjectCost: Int,
      wsS_ProjectContracts: String,
      wsS_ProjectPresentations: String,
      wsS_ProjectProposals: String,
      wsS_ProjectRecordCustom01: String,
      wsS_ProjectRecordCustom02: String,
      wsS_ProjectRecordCustom03: String,
      wsS_ProjectRecordSets: String,
      wsS_ProjectSheets: String,
      #yearCompleted: Int,
      zip: String,
      primaryImageID: String,
      #descriptionCount: Int,
      #latitude: Float,
      #longitude: Float,
      #hasLatLon: Int,
      #apiFilter: Int,
      #modDate: String
       ): [Entity]
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
