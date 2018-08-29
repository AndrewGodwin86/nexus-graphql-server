import RelatedEntity from './relatedentity';

const Company = `
  type Company {
    _Link: String
    _Addresses: String
    companyAddresses: [CompanyAddress]
    _Employees: String
    companyEmployees: [RelatedEntity]
    _Contacts: String
    companyContacts: [RelatedEntity]
    _Projects: String
    companyProjects: [RelatedEntity]
    _Opportunities: String
    companyOpportunities: [RelatedEntity]
    companyID: String
    addressDesc: String
    city: String
    companyInLOBSystem: String
    companyInPIMSystem: String
    companyName: String
    companyNumber: String
    companyProfile_Custom01: String
    companyProfile_Custom02: String
    companyProfile_Custom03: String
    companyProfile_Custom04: String
    companyProfile_Custom05: String
    companyProfile_Custom06: String
    companyProfile_Custom07: String
    companyProfile_Custom08: String
    companyProfile_Custom09: String
    companyProfile_Custom10: String
    companyType: String
    contactCount: String
    country: String
    disabledVetOwnedSmallBusiness: String
    disadvBusiness: String
    disciplineDescription: String
    email: String
    employeeCount: Int
    fax: String
    hbcu: String
    loB_CompanyRecord: String
    loB_CV_CustDat01: String
    loB_CV_CustDat02: String
    loB_CV_CustDat03: String
    loB_CV_CustDat04: String
    loB_CV_CustDat05: String
    loB_CV_CustNum01: Float
    loB_CV_CustNum02: Float
    loB_CV_CustNum03: Float
    loB_CV_CustNum04: Float
    loB_CV_CustNum05: Float
    loB_CV_CustTxt01: String
    loB_CV_CustTxt02: String
    loB_CV_CustTxt03: String
    loB_CV_CustTxt04: String
    loB_CV_CustTxt05: String
    loB_CV_CustVar01: String
    loB_CV_CustVar02: String
    loB_CV_CustVar03: String
    loB_CV_CustVar04: String
    loB_CV_CustVar05: String
    loB_CV_CustVar06: String
    loB_CV_CustVar07: String
    loB_CV_CustVar08: String
    loB_CV_CustVar09: String
    loB_CV_CustVar10: String
    loB_CV_CustVar11: String
    loB_CV_CustVar12: String
    loB_CV_CustVar13: String
    loB_CV_CustVar14: String
    loB_CV_CustVar15: String
    loB_EntityCategory: String
    loB_EntityID: String
    minorityBusiness: String
    notes: String
    opportunityCount: Int
    phone: String
    piM_CV_CustDat01: String
    piM_CV_CustNum01: Float
    piM_CV_CustTxt01: String
    piM_CV_CustTxt02: String
    piM_CV_CustTxt03: String
    piM_CV_CustVar01: String
    piM_CV_CustVar02: String
    piM_CV_CustVar03: String
    piM_CV_CustVar04: String
    piM_CV_CustVar05: String
    piM_CompanyRecord: String
    piM_EntityCategory: String
    piM_EntityID: String
    primaryDiscipline: String
    priorWork: String
    profileLastModifiedBy: String
    projectCount: Int
    projectRoles: String
    recommend: String
    relationshipStatus: String
    showInDirectory: String
    smallBusiness: String
    sourceSystem: String
    state: String
    status: String
    streetAddress1: String
    streetAddress2: String
    streetAddress3: String
    vetOwnedSmallBusiness: String
    website: String
    womanOwned: String
    wsS_CompanyRecordCustom01: String
    wsS_CompanyRecordCustom02: String
    wsS_CompanyRecordCustom03: String
    zip: String
    primaryImageID: String
    modDate: String
  }
  type CompanyAddress {
    companyID: ID
    addressDesc: String
    streetAddress1: String
    streetAddress2: String
    streetAddress3: String
    streetAddress4: String
    city: String
    state: String
    zip: String
    country: String
    phone: String
    primaryInd: String
    modDate: String
    accounting: String
    showInSynthesis: String
  }
`;

export default [Company, RelatedEntity];
