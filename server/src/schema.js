import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
	type Entity {
	  id: ID!              # "!" denotes a required field
	  name: String
	}

	type Project {
		entityID: ID
		entityName: String
		modDate: String
		projectDetails(projectID: String): ProjectDetails
	}
	type ProjectDetails {
    _Link: String
    _Media: String
    projectMedia: [MediaDetails]
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
    sectors: String
    loB_PR_CustTxt02: String
    loB_PR_CustTxt03: String
    loB_PR_CustTxt04: String
    loB_PR_CustTxt05: String
    loB_PR_CustVar01: String
    attribution: String
    loB_PR_CustVar02: String
    yearCompleted: String
    loB_PR_CustVar03: String
    originalArchitect: String
    loB_PR_CustVar04: String
    alias: String
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
	type Opportunity {
		entityID: ID
		entityName: String
		modDate: String
		opportunityDetails(opportunityID: String): OpportunityDetails
	}
	type OpportunityDetails {
    _Link: String
    _Employees: String
    _Contacts: String
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
	type Company {
		entityID: ID
		entityName: String
		modDate: String
		companyDetails(companyID:String): CompanyDetails
	}
	type CompanyDetails {
    _Link: String
    _Addresses: String
    _Employees: String
    _Contacts: String
    _Projects: String
    _Opportunities: String
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

	type Contact {
		entityID: ID
		entityName: String
		modDate: String
		contactDetails(contactID: String): ContactDetails
	}
	type ContactDetails {
		_Link: String
    _Employees: String
    _Company: String
    _Projects: String
    _Opportunities: String
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

	type Employee {
		entityID: ID
		entityName: String
		modDate: String
		employeeDetails(employeeID: String): EmployeeDetails
	}
	type EmployeeDetails {
		_Link: String
    _Certifications: String
    _Affiliations: String
    _Registrations: String
    _Skills: String
    _Resumes: String
    _Degrees: String
    _Media: String
    _Contacts: String
    _Companies: String
    _Projects: String
    _Opportunities: String
    employeeID: String
		affiliationsDetail: [Affiliation]
		aia: String
		birthday: String
		birthdayDate: String
		birthdayMonth: String
		birthdayPrivate: String
  	billingCategory: String
		certifications: String
		certificationsDetail: [Certification]
		companyCount: Int
		contactCount: Int
		country: String
		daM_EM_CustDat01: String
    daM_EM_CustNum01: Int
    daM_EM_CustTxt01: String
    daM_EM_CustTxt02: String
    daM_EM_CustTxt03: String
    daM_EM_CustVar01: String
    daM_EM_CustVar02: String
    daM_EM_CustVar03: String
    daM_EM_CustVar04: String
    daM_EM_CustVar05: String
		daM_EmployeeRecord: String
    daM_EntityCategory: String
    daM_EntityID: String
    daM_ImageCount: Int
    degreesEarned: String
		degreesEarnedDetail: [Degree]
		department: String
		discipline: String
  	email: String
		employeeAdvocate: String
    employeeInDAMSystem: String
    employeeInLOBSystem: String
    employeeInPIMSystem: String
    employeeNumber: String
		employeeProfile_Custom01: String
    employeeProfile_Custom02: String
    employeeProfile_Custom03: String
    employeeProfile_Custom04: String
    employeeProfile_Custom05: String
    employeeProfile_Custom06: String
    employeeProfile_Custom07: String
    employeeProfile_Custom08: String
    employeeProfile_Custom09: String
    employeeProfile_Custom10: String
		employeeCompanies: [RelatedEntity]
		employeeContacts: [RelatedEntity]
		employeeOpportunities: [RelatedEntity]
		employeeProjects: [RelatedEntity]
  	employeeType: String
		fax: String
		firmName: String
    firstName: String
    fullName: String
    hireDate: String
		homeAddress1: String
		homeAddress2: String
		homeAddress3: String
		homeAddress4: String
		homeCity: String
		homeCountry: String
		homeState: String
		homeZip: String
		hoursPerWeek: String
  	lastName: String
		leedAccredited: String
		licensesAndRegistrations: String
		registrationsDetail: [Registration]
		loB_EM_CustDat01: String
    loB_EM_CustDat02: String
    loB_EM_CustDat03: String
    loB_EM_CustDat04: String
    loB_EM_CustDat05: String
    loB_EM_CustNum01: String
    loB_EM_CustNum02: String
    loB_EM_CustNum03: String
    loB_EM_CustNum04: String
    loB_EM_CustNum05: String
    loB_EM_CustTxt01: String
    loB_EM_CustTxt02: String
    loB_EM_CustTxt03: String
    loB_EM_CustTxt04: String
    loB_EM_CustTxt05: String
    loB_EM_CustVar01: String
    loB_EM_CustVar02: String
    loB_EM_CustVar03: String
    loB_EM_CustVar04: String
    loB_EM_CustVar05: String
    loB_EM_CustVar06: String
    loB_EM_CustVar07: String
    loB_EM_CustVar08: String
    loB_EM_CustVar09: String
    loB_EM_CustVar10: String
    loB_EM_CustVar11: String
    loB_EM_CustVar12: String
    loB_EM_CustVar13: String
    loB_EM_CustVar14: String
    loB_EM_CustVar15: String
    loB_EmployeeRecord: String
    loB_EntityCategory: String
    loB_EntityID: String
    mobilePhone: String
		ncarb: String
    office: String
    opportunityCount: Int
    org: String
    orgName: String
    personalBio: String
		piM_EM_CustDat01: String
    piM_EM_CustNum01: String
    piM_EM_CustTxt01: String
    piM_EM_CustTxt02: String
    piM_EM_CustTxt03: String
    piM_EM_CustVar01: String
    piM_EM_CustVar02: String
    piM_EM_CustVar03: String
    piM_EM_CustVar04: String
    piM_EM_CustVar05: String
		piM_EmployeeRecord: String
    piM_EntityCategory: String
    piM_EntityID: String
    preferredFirstName: String
		professionalAffiliations: String
  	profileLastModifiedBy: String
		projectCount: Int
		projectRoles: String
  	projectTypes: String
		registeredArchitect: String
    resourceFor: String
    showInCompanyDirectory: String
		skills: String
		state: String
    sourceSystem: String
    status: String
		streetAddress1: String
		streetAddress2: String
		streetAddress3: String
		streetAddress4: String
    title: String
    workPhone: String
    workPhoneExtension: String
    workPhonePlusExtension: String
		wsS_EmployeeRecordCustom01: String
    wsS_EmployeeRecordCustom02: String
    wsS_EmployeeRecordCustom03: String
    wsS_EmployeeResumes: String
    yearsWithFirm: Int
		zip: String
		priorYearsWithFirm: Int
    primaryImageID: String
    modDate: String
	}
	type Affiliation {
		recordID: ID
		employeeID: ID
		affiliation: String
		membershipNo: String
		dateExpires: String
		modDate: String
	}
	type Certification {
		recordID: ID
		employeeID: String
		certification: String
		certifyingAgency: String
		dateEarned: String
		modDate: String
	}
	type Degree {
		recordID: ID
		employeeID: String
		degree: String
		institution: String
		yearEarned: Int
		modDate: String
		showInSynthesis: String
	}
	type Registration {
		recordID: ID
		employeeID: String
		registration: String
		registrationNo: String
		stateRegistered: String
		dateEarned: String
		dateExpires: String
		lastRenewed: String
		modDate: String
	}
	type StreamItem {
		entityID: Int
		entityName: String
		modDate: String
		streamItemDetails(streamItemID:Int): StreamItemDetails
	}
	type StreamItemDetails {
		_Link: String
		_Comments: String
		_Likes: String
    _Author: String
    itemID: Int
    authorID: String
    authorName: String
    authorImageID: String
    itemType: String
    dateStamp: String
    dateStampString: String
    title: String
    titleWithEntityNames: String
		content: String
		contentWithEntityNames: String
		commentCount: Int
		likeCount: Int
    subItemID: String
    subItemProfileURL: String
    subItemListID: String
    subItemListName: String
    subItemListURL: String
    subItemTitle: String
    subItemSubtitle: String
    subItemBody: String
    subItemDateStamp: String
		mentionsList: [Mention]
  	hashtagsList: [Hashtag]
  	likesList: [Like]
		mediaList: [MediaDetails]
    displayEntityType: String
    displayEntityID: String
    displayEntityImageID: String
    displayEntityImagePublicURL: String
    modDate: String
	}
	type Mention {
		_Link: String
		_Author: String
  	itemID: Int
		commentID: Int
		entityType: String
    entityID: String
    entityName: String
		entityImageID: String
    hasProfile: Int
    mentionAuthor: String
    authorName: String
    dateStamp: String
    communitySiteID: String
    publicSite: Int
	}
	type Hashtag {
		_Author: String
		hashtagID: String
    availableTopic: Int
    itemID: Int
    hashtagAuthor: String
    dateStamp: String
	}
	type Like {
		likeID: Int
		itemID: Int
		authorID: String
		authorName: String
		authorImageID: String
		dateStamp: String
	}
	type Media {
		entityID: ID
		entityName: String
		modDate: String
		mediaDetails(mediaID: String): MediaDetails
	}
	type MediaDetails {
		_Link: String
    _Data: String
    _SignedUrl: String
    mediaID: String
    mediaType: String
    sourceAssetID: String
    title: String
    caption: String
    description: String
    rank: Int
    dateUploaded: String
    modDate: String
    keySystem: String
    mimeType: String
    originalHeight: Int
    originalWidth: Int
    originalFilename: String
    uploadedBy: String
		deleted: Int
		publicBucket: Int
		latitude: Float
		longitude: Float
		publicURL: String
		dateTaken: String
    damImageRecordURL: String
    damCategoryID: String
    accessLevel: String
		apiFilter: Int
  	sourceAssetHash: String
	}
	type RelatedEntity { # e.g. projects/$id/employees
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
	type Relationship { # Complete relationship from api/v1/relationships
		assocType: String
    typeID: String
    entityCategory: String
    entityID: String
    modDate: String
    associatedThruLOB: String
    associatedThruPIM: String
    associationSource: String
	}




# This type specifies the entry points into our API.
type Query {
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

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
