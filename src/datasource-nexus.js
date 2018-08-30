import { RESTDataSource } from 'apollo-datasource-rest';

export default class NexusAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://nexus5.knowledge-architecture.com/api/v1';
    }

  willSendRequest(request) {
    // function to base64 encode a string using Buffer
    const btoa = function(str) {
        return Buffer.from(str).toString('base64');
    }
    // Encode ClientID:ClientKey to use in request headers
    const authorizationB64 = btoa(process.env.KA_CLIENT_ID + ':' + process.env.KA_CLIENT_KEY);
    const authHeader = 'Basic '+ authorizationB64;
    request.headers.set('Authorization', authHeader);
  }

  async getEntity(entityType, id) {
    const data = await this.get(`${entityType}/${id}`);
    return data.results[0];
  }

  async getEntityList(entityType, args) {
    const data = await this.get(entityType, {
        perPage: args.perPage || 1,
        pageNum: args.pageNum || 0
    })  
    return data.results;
  }

  async getProjectList(entityType, args) {
    const data = await this.get(entityType, {
        perPage: args.perPage || 3,
        pageNum: args.pageNum || 0,
        name: args.name || '',
        chargeType: args.chargeType || '',
        city: args.city || '',
        clientID: args.clientID || '',
        clientName: args.clientName || '',
        //minCompanyCount: args.minCompanyCount || 1, //this should be 0
        //maxCompanyCount...
        contractor: args.contractor || '',
        country: args.country || '',
        LEEDCertificationLevel: args.LEEDCertificationLevel || '',
        LEEDCertificationStatus: args.LEEDCertificationStatus || '',
        LEEDProgram: args.LEEDProgram || '',
        LEEDProject: args.LEEDProject || '',
        loB_PR_CustTxt01: args.loB_PR_CustTxt01 || '',
        loB_PR_CustTxt02: args.loB_PR_CustTxt02 || '',
        loB_PR_CustTxt03: args.loB_PR_CustTxt03 || '',
        loB_PR_CustTxt04: args.loB_PR_CustTxt04 || '',
        loB_PR_CustTxt05: args.loB_PR_CustTxt05 || '',
        loB_PR_CustVar01: args.loB_PR_CustVar01 || '',
        loB_PR_CustVar02: args.loB_PR_CustVar02 || '',
        loB_PR_CustVar03: args.loB_PR_CustVar03 || '',
        loB_PR_CustVar04: args.loB_PR_CustVar04 || '',
        loB_PR_CustVar05: args.loB_PR_CustVar05 || '',
        loB_PR_CustVar06: args.loB_PR_CustVar06 || '',
        loB_PR_CustVar07: args.loB_PR_CustVar07 || '',
        loB_PR_CustVar08: args.loB_PR_CustVar08 || '',
        loB_PR_CustVar09: args.loB_PR_CustVar09 || '',
        loB_PR_CustVar10: args.loB_PR_CustVar10 || '',
        loB_PR_CustVar11: args.loB_PR_CustVar11 || '',
        loB_PR_CustVar12: args.loB_PR_CustVar12 || '',
        loB_PR_CustVar13: args.loB_PR_CustVar13 || '',
        loB_PR_CustVar14: args.loB_PR_CustVar14 || '',
        loB_PR_CustVar15: args.loB_PR_CustVar15 || '',
        loB_ProjectPlan: args.loB_ProjectPlan || '',
        marketingName: args.marketingName || '',
        marketingTier: args.marketingTier || '',
        office: args.office || '',
        org: args.org || '',
        orgName: args.orgName || '',
        parentProject: args.parentProject || '',
        parentProjectNumber: args.parentProjectNumber || '',
        pic: args.pic || '',
        picNumber: args.picNumber || '',
        piM_EntityCategory: args.piM_EntityCategory || '',
        piM_EntityID: args.piM_EntityID || '',
        //piM_PR_CustDat01: args. || '',
        //piM_PR_CustNum01: : args. || '',
        piM_PR_CustTxt01: args.piM_PR_CustTxt01 || '',
        piM_PR_CustTxt02: args.piM_PR_CustTxt02 || '',
        piM_PR_CustTxt03: args.piM_PR_CustTxt03 || '',
        piM_PR_CustVar01: args.piM_PR_CustVar01 || '',
        piM_PR_CustVar02: args.piM_PR_CustVar02 || '',
        piM_PR_CustVar03: args.piM_PR_CustVar03 || '',
        piM_PR_CustVar04: args.piM_PR_CustVar04 || '',
        piM_PR_CustVar05: args.piM_PR_CustVar05 || '',
        piM_ProjectRecord: args.piM_ProjectRecord || '',
        piM_ProjectWebsite: args.piM_ProjectWebsite || '',
        profileLastModifiedBy: args.profileLastModifiedBy || '',
        projectAliases: args.projectAliases || '',
        projectDeliveryMethod: args.projectDeliveryMethod || '',
        projectFolderLocation: args.projectFolderLocation || '',
        projectInDAMSystem: args.projectInDAMSystem || '',
        projectInLOBSystem: args.projectInLOBSystem || '',
        projectInPIMSystem: args.projectInPIMSystem || '',
        projectManager: args.projectManager || '',
        projectManagerNumber: args.projectManagerNumber || '',
        projectName: args.projectName || '',
        projectNumberDisplay: args.projectNumberDisplay || '',
        projectPhase: args.projectPhase || '',
        projectProfile_Custom01: args.projectProfile_Custom01 || '',
        projectProfile_Custom02: args.projectProfile_Custom02 || '',
        projectProfile_Custom03: args.projectProfile_Custom03 || '',
        projectProfile_Custom04: args.projectProfile_Custom04 || '',
        projectProfile_Custom05: args.projectProfile_Custom05 || '',
        projectProfile_Custom06: args.projectProfile_Custom06 || '',
        projectProfile_Custom07: args.projectProfile_Custom07 || '',
        projectProfile_Custom08: args.projectProfile_Custom08 || '',
        projectProfile_Custom09: args.projectProfile_Custom09 || '',
        projectProfile_Custom10: args.projectProfile_Custom10 || '',
        projectRole: args.projectRole || '',
        projectType: args.projectType || '',
        publicSector: args.publicSector || '',
        sourceSystem: args.sourceSystem || '',
        //squareFootage: : args. || '',
        state: args.state || '',
        status: args.status || '',
        streetAddress1: args.streetAddress1 || '',
        streetAddress2: args.streetAddress2 || '',
        streetAddress3: args.streetAddress3 || '',
        streetAddress4: args.streetAddress4 || '',
        //totalProjectCost: : args. || '',
        wsS_ProjectContracts: args.wsS_ProjectContracts || '',
        wsS_ProjectPresentations: args.wsS_ProjectPresentations || '',
        wsS_ProjectProposals: args.wsS_ProjectProposals || '',
        wsS_ProjectRecordCustom01: args.wsS_ProjectRecordCustom01 || '',
        wsS_ProjectRecordCustom02: args.wsS_ProjectRecordCustom02 || '',
        wsS_ProjectRecordCustom03: args.wsS_ProjectRecordCustom03 || '',
        wsS_ProjectRecordSets: args.wsS_ProjectRecordSets || '',
        wsS_ProjectSheets: args.wsS_ProjectSheets || '',
        //yearCompleted: : args. || '',
        zip: args.zip || '',
        primaryImageID: args.primaryImageID || '',
        //descriptionCount: : args. || '',
        //latitude: : args. || '',
        //longitude: : args. || '',
        //hasLatLon: args.hasLatLon || '',
        //apiFilter: args.apiFilter || 0,
  
        //modDate: args. || ''
    })  
    return data.results;
  }

  async getRelatedEntity(entityType, entityID, relatedEntityType) {
    const data = this.get(`${entityType}/${entityID}/${relatedEntityType}`).then(d => d["results"]);
    return data;
  }

}