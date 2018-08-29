import RelatedEntity from './relatedentity';

const Opportunity = `
  type OpportunityDetails {
    _Link: String
    _Employees: String
    opportunityEmployees: [RelatedEntity]
    _Contacts: String
    opportunityContacts: [RelatedEntity]
    opportunityID: String
    assocProjectName: String
    assocProjectNumber: String
    city: String
    clientID: String
    clientName: String
    openDate: String
    daysOpen: Int
    closeDate: String
    contactID: String
    contactName: String
    country: String
    description: String
    loB_EntityCategory: String
    loB_EntityID: String
    loB_OpportunityRecord: String
    opportunityInLOBSystem: String
    opportunityInPIMSystem: String
    opportunityName: String
    opportunityNumber: String
    opportunityType: String
    org: String
    orgName: String
    pic: String
    picNumber: String
    piM_EntityCategory: String
    piM_EntityID: String
    piM_ProjectRecord: String
    piM_ProjectWebsite: String
    probability: Int
    projectFolderLocation: String
    projectManager: String
    projectManagerNumber: String
    revenue: Int
    showInOpportunityDirectory: String
    source: String
    sourceSystem: String
    stage: String
    state: String
    status: String
    streetAddress1: String
    streetAddress2: String
    streetAddress3: String
    streetAddress4: String
    weightedRevenue: Int
    zip: String
    modDate: String
    contactCount: Int
    employeeCount: Int
    companyCount: Int
  }
`;

export default [Opportunity,RelatedEntity];
