import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';
import NexusAPI from './datasource-nexus';
import { schema } from './schema';

// This is per the dotenv docs to bring in env variables
// defined in .env
dotenv.config();

// Warn if clientID or key are missing
if (typeof process.env.KA_CLIENT_ID === 'undefined' || process.env.KA_CLIENT_KEY === 'undefined') {
  console.warn('WARNING: undefined ClientID or ClientKey. Check .env file');
}

const typeDefs = gql`
  type Project {
    _Link: String
    _Media: String
    _Employees: String
    _Companies: String
    _Contacts: String
    _Descriptions: String
    _Awards: String
    projectID: ID
    projectNumber: String
    descriptionCount: Int
    chargeType: String
    city: String
    clientID: String
    clientName: String
    companyCount: Int
    constructionCompletionDate: String
    contactCount: Int
    employeeCount: Int
    constructionCost: Int
    contractDate: String
    contractor: String
    country: String
    daM_EntityCategory: String
    daM_EntityID: String
    daM_ImageCount: Int
    daM_PR_CustDat01: String
    daM_PR_CustNum01: Float
    daM_PR_CustTxt01: String
    daM_PR_CustTxt02: String
    daM_PR_CustTxt03: String
    daM_PR_CustVar01: String
    daM_PR_CustVar02: String
    daM_PR_CustVar03: String
    daM_PR_CustVar04: String
    daM_PR_CustVar05: String
    daM_ProjectRecord: String
    description: String
    leedCertificationLevel: String
    leedCertificationStatus: String
    leedProgram: String
    leedProject: String
    loB_EntityCategory: String
    loB_EntityID: String
    loB_PR_CustDat01: String
    loB_PR_CustDat02: String
    loB_PR_CustDat03: String
    loB_PR_CustDat04: String
    loB_PR_CustDat05: String
    loB_PR_CustNum01: Float
    loB_PR_CustNum02: Float
    loB_PR_CustNum03: Float
    loB_PR_CustNum04: Float
    loB_PR_CustNum05: Float
    loB_PR_CustTxt01: String
    loB_PR_CustTxt02: String
    loB_PR_CustTxt03: String
    loB_PR_CustTxt04: String
    loB_PR_CustTxt05: String
    loB_PR_CustVar01: String
    loB_PR_CustVar02: String
    loB_PR_CustVar03: String
    loB_PR_CustVar04: String
    loB_PR_CustVar05: String
    loB_PR_CustVar06: String
    loB_PR_CustVar07: String
    loB_PR_CustVar08: String
    loB_PR_CustVar09: String
    loB_PR_CustVar10: String
    loB_PR_CustVar11: String
    loB_PR_CustVar12: String
    loB_PR_CustVar13: String
    loB_PR_CustVar14: String
    loB_PR_CustVar15: String
    loB_ProjectPlan: String
    loB_ProjectRecord: String
    marketingName: String
    marketingTier: String
    office: String
    org: String
    orgName: String
    parentProject: String
    parentProjectNumber: String
    pic: String
    picNumber: String
    piM_EntityCategory: String
    piM_EntityID: String
    piM_PR_CustDat01: String
    piM_PR_CustNum01: Float
    piM_PR_CustTxt01: String
    piM_PR_CustTxt02: String
    piM_PR_CustTxt03: String
    piM_PR_CustVar01: String
    piM_PR_CustVar02: String
    piM_PR_CustVar03: String
    piM_PR_CustVar04: String
    piM_PR_CustVar05: String
    piM_ProjectRecord: String
    piM_ProjectWebsite: String
    profileLastModifiedBy: String
    projectAliases: String
    projectDeliveryMethod: String
    projectFolderLocation: String
    projectInDAMSystem: String
    projectInLOBSystem: String
    projectInPIMSystem: String
    projectManager: String
    projectManagerNumber: String
    projectName: String
    projectNumberDisplay: String
    projectPhase: String
    projectProfile_Custom01: String
    projectProfile_Custom02: String
    projectProfile_Custom03: String
    projectProfile_Custom04: String
    projectProfile_Custom05: String
    projectProfile_Custom06: String
    projectProfile_Custom07: String
    projectProfile_Custom08: String
    projectProfile_Custom09: String
    projectProfile_Custom10: String
    projectRole: String
    projectType: String
    publicSector: String
    showInProjectDirectory: String
    sourceSystem: String
    squareFootage: Int
    state: String
    status: String
    streetAddress1: String
    streetAddress2: String
    streetAddress3: String
    streetAddress4: String
    totalProjectCost: Int
    wsS_ProjectContracts: String
    wsS_ProjectPresentations: String
    wsS_ProjectProposals: String
    wsS_ProjectRecordCustom01: String
    wsS_ProjectRecordCustom02: String
    wsS_ProjectRecordCustom03: String
    wsS_ProjectRecordSets: String
    wsS_ProjectSheets: String
    yearCompleted: Int
    zip: String
    primaryImageID: String
    latitude: Float
    longitude: Float
    apiFilter: Int
    deleted: Int
    modDate: String
    projectEmployees: [RelatedEntity]
  }
  type RelatedEntity {
    roleOrRelationship: String
    relationshipModDate: String
    associatedThruLOB: String
    associatedThruPIM: String
    associationSource: String
    relatedEntityType: String
    relatedEntityID: String
    relatedEntityName: String
    relatedEntitySecondaryLabel: String
    relatedEntityInDirectory: String
  }
  type Employee {
    employeeID: ID
    fullName: String
  }
  type Entity {
    entityID: ID
    entityName: String
    modDate: String
    project: Project
  }
  type Query {
    projects(status: String): [Entity]
    project(projectID:ID): Project
    employee(id:ID): Employee
  }
  
`;

const resolvers = {
  Project: {
    projectEmployees: async (project,  args, { dataSources }) => {
      console.log(project.projectID)
      return dataSources.nexusAPI.getRelatedEntity('projects', project.projectID, 'employees');
    },
  },
  Entity: {
    project: async(entity, args, { dataSources }) => {
      return dataSources.nexusAPI.getProject(entity.entityID);
    }
  },
  Query: {
    project: async (_source, { projectID }, { dataSources }) => {
      return dataSources.nexusAPI.getProject(projectID);
    },
    employee: async (_source, { id }, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('employees', id);
    },
    projects: async (_source, args, {dataSources}) => {
      return dataSources.nexusAPI.getEntities('projects');
    }
  },
};


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      nexusAPI: new NexusAPI()
    };
  },
  //schema
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});

/*server.use('/graphql', bodyParser.json(), graphqlExpress(request => ({
  schema,
  context: context(request.headers, authHeader)
})));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () => {
  console.log(`GraphQL Server is now running on http://localhost:${PORT}/graphql`);
  console.log(`View GraphiQL at http://localhost:${PORT}/graphiql`)
});
*/

