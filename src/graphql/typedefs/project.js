import RelatedEntity from './relatedentity';

const Project = `
  type Project {
    _Link: String
    _Media: String
    #projectMedia: [MediaDetails]
    _Employees: String
    projectEmployees: [RelatedEntity]
    _Companies: String
    projectCompanies: [RelatedEntity]
    _Contacts: String
    projectContacts: [RelatedEntity]
    _Descriptions: String
    projectDescriptions: [ProjectDescription]
    _Awards: String
    projectAwards: [ProjectAward]
    projectID: ID
    projectNumber: String
    descriptionCount: Int
    chargeType: String
    city: String
    clientID: String
    clientName: String
    companyCount: Int
    constructionCompletionDate: String
    constructionCost: Float
    contactCount: Int
    employeeCount: Int
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
    PIM_EntityCategory: String
    PIM_EntityID: String
    PIM_PR_CustDat01: String
    PIM_PR_CustNum01: Float
    PIM_PR_CustTxt01: String
    PIM_PR_CustTxt02: String
    PIM_PR_CustTxt03: String
    PIM_PR_CustVar01: String
    PIM_PR_CustVar02: String
    PIM_PR_CustVar03: String
    PIM_PR_CustVar04: String
    PIM_PR_CustVar05: String
    PIM_ProjectRecord: String
    PIM_ProjectWebsite: String
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
    squareFootage: Float
    state: String
    status: String
    streetAddress1: String
    streetAddress2: String
    streetAddress3: String
    streetAddress4: String
    totalProjectCost: Float
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
  }
  type ProjectDescription {
    recordID: String
    projectID: String
    descriptionCategory: String
    description: String
    modDate: String
    showInSynthesis: String
  }
  type ProjectAward {
    RecordID: String
    ProjectID: String
    Description: String
    Institution: String
    AwardDate: String
    AwardYear: Int
    ModDate: String
    ShowInSynthesis: String
    ApiFilter: Int
  }
`;

export default [Project, RelatedEntity];