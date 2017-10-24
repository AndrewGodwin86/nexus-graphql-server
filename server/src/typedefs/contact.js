import RelatedEntity from './relatedentity';

const Contact = `
  type Contact {
    entityID: ID
    entityName: String
    modDate: String
    contactDetails(contactID: String): ContactDetails
  }
  type ContactDetails {
    _Link: String
    _Employees: String
    contactEmployees: [RelatedEntity]
    _Company: String
    _Projects: String
    contactProjects: [RelatedEntity]
    _Opportunities: String
    contactOpportunities: [RelatedEntity]
    contactID: String
    addressDesc: String
    campaignCount: Int
    city: String
    companyID: String
    companyName: String
    companyPrimaryDiscipline: String
    contactFirstName: String
    contactInLOBSystem: String
    contactInPIMSystem: String
    contactLastName: String
    contactName: String
    contactProfile_Custom01: String
    contactProfile_Custom02: String
    contactProfile_Custom03: String
    contactProfile_Custom04: String
    contactProfile_Custom05: String
    contactProfile_Custom06: String
    contactProfile_Custom07: String
    contactProfile_Custom08: String
    contactProfile_Custom09: String
    contactProfile_Custom10: String
    contactType: String
    country: String
    department: String
    email: String
    employeeCount: Int
    fax: String
    loB_ContactRecord: String
    loB_CO_CustDat01: String
    loB_CO_CustDat02: String
    loB_CO_CustDat03: String
    loB_CO_CustDat04: String
    loB_CO_CustDat05: String
    loB_CO_CustNum01: Float
    loB_CO_CustNum02: Float
    loB_CO_CustNum03: Float
    loB_CO_CustNum04: Float
    loB_CO_CustNum05: Float
    loB_CO_CustTxt01: String
    loB_CO_CustTxt02: String
    loB_CO_CustTxt03: String
    loB_CO_CustTxt04: String
    loB_CO_CustTxt05: String
    loB_CO_CustVar01: String
    loB_CO_CustVar02: String
    loB_CO_CustVar03: String
    loB_CO_CustVar04: String
    loB_CO_CustVar05: String
    loB_CO_CustVar06: String
    loB_CO_CustVar07: String
    loB_CO_CustVar08: String
    loB_CO_CustVar09: String
    loB_CO_CustVar10: String
    loB_CO_CustVar11: String
    loB_CO_CustVar12: String
    loB_CO_CustVar13: String
    loB_CO_CustVar14: String
    loB_CO_CustVar15: String
    loB_EntityCategory: String
    loB_EntityID: String
    mobilePhone: String
    opportunityCountr: Int
    piM_CO_CustDat01: String
    piM_CO_CustNum01: String
    piM_CO_CustTxt01: String
    piM_CO_CustTxt02: String
    piM_CO_CustTxt03: String
    piM_CO_CustVar01: String
    piM_CO_CustVar02: String
    piM_CO_CustVar03: String
    piM_CO_CustVar04: String
    piM_CO_CustVar05: String
    piM_ContactRecord: String
    piM_EntityCategory: String
    piM_EntityID: String
    profileLastModifiedBy: String
    preferredFirstName: String
    projectCount: Int
    projectRoles: String
    showInContactDirectory: String
    sourceSystem: String
    state: String
    status: String
    streetAddress1: String
    streetAddress2: String
    streetAddress3: String
    streetAddress4: String
    title: String
    workPhone: String
    wsS_ContactRecordCustom01: String
    wsS_ContactRecordCustom02: String
    wsS_ContactRecordCustom03: String
    zip: String
    primaryImageID: String
    modDate: String
  }
`;

export default [Contact, RelatedEntity];
