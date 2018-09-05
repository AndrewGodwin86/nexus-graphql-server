const Inputs = `
    input ProjectURLParams {
        perPage: Int
        pageNum: Int
        status: String
        name: String
        chargeType: String
        city: String
        country: String
        clientID: String
        clientName: String
        minCompanyCount: Int
        maxCompanyCount: Int
        minConstructionCompletionDate: String
        maxConstructionCompletionDate: String
        minConstructionCost: Float
        maxConstructionCost: Float
        minContactCount: Int
        maxContactCount: Int
        minContractDate: String
        maxContractDate: String
        contractor: String
        country: String
        DAM_EntityCategory: String
        DAM_EntityID: String
        minDam_ImageCount: Int
        maxDAM_ImageCount: Int
        minDAM_PR_CustDat01: String
        maxDAM_PR_CustDat01: String
        minDAM_PR_CustNum01: Float
        maxDAM_PR_CustNum01: Float
        minEmployeeCount: Int
        maxEmployeeCount: Int
        daM_PR_CustTxt01: String
        daM_PR_CustTxt02: String
        daM_PR_CustTxt03: String
        daM_PR_CustVar01: String
        daM_PR_CustVar02: String
        daM_PR_CustVar03: String
        daM_PR_CustVar04: String
        daM_PR_CustVar05: String
        daM_ProjectRecord: String
        LEEDCertificationLevel: String
        LEEDCertificationStatus: String
        LEEDProgram: String
        LEEDProject: String
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
        minPIM_PR_CustDat01: String
        maxPIM_PR_CustDat01: String
        minPIM_PR_CustNum01: Float
        maxPIM_PR_CustNum01: Float
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
        projectNumber: String
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
        sourceSystem: String
        minSquareFootage: Int
        maxSquareFootage: Int
        state: String
        status: String
        streetAddress: String
        minTotalProjectCost: Int
        maxTotalProjectCost: Int
        wsS_ProjectContracts: String
        wsS_ProjectPresentations: String
        wsS_ProjectProposals: String
        wsS_ProjectRecordCustom01: String
        wsS_ProjectRecordCustom02: String
        wsS_ProjectRecordCustom03: String
        wsS_ProjectRecordSets: String
        wsS_ProjectSheets: String
        minYearCompleted: Int
        maxYearCompleted: Int
        zip: String
        primaryImageID: String
        minDescriptionCount: Int
        maxDescriptionCount: Int
        minModDate: String
        maxModDate: String
        minLatitude: Float
        maxLatitude: Float
        minlongitude: Float
        maxlongitude: Float
        hasLatLon: Int
        apiFilter: Int
    }
    input EmployeeURLParams {
        perPage: Int
        pageNum: Int
        AIA: String
        BillingCategory: String
        Birthday: String
        minBirthday_Day: String
        maxBirthday_Day: Int
        Birthday_Month: String
        BirthdayPrivate: String
        Certifications: String
        minCompanyCount: Int
        maxCompanyCount: Int
        minContactCount: Int
        maxContactCount: Int
        minDAM_EM_CustDat01: String
        maxDAM_EM_CustDat01: String
        minDAM_EM_CustNum01: Float
        maxDAM_EM_CustNum01: Float
        DAM_EM_CustTxt01: String
        DAM_EM_CustTxt02: String
        DAM_EM_CustTxt03: String
        DAM_EM_CustVar01: String
        DAM_EM_CustVar02: String
        DAM_EM_CustVar03: String
        DAM_EM_CustVar04: String
        DAM_EM_CustVar05: String
        DAM_EmployeeRecord: String
        DAM_EntityCategory: String
        DAM_EntityID: String
        minDAM_ImageCount: Int
        maxDAM_ImageCount: Int
        DegreesEarned: String
        Department: String
        Discipline: String
        Email: String
        EmployeeAdvocate: String
        EmployeeInDAMSystem: String
        EmployeeInLOBSystem: String
        EmployeeInPIMSystem: String
        EmployeeProfile_Custom01: String
        EmployeeProfile_Custom02: String
        EmployeeProfile_Custom03: String
        EmployeeProfile_Custom04: String
        EmployeeProfile_Custom05: String
        EmployeeProfile_Custom06: String
        EmployeeProfile_Custom07: String
        EmployeeProfile_Custom08: String
        EmployeeProfile_Custom09: String
        EmployeeProfile_Custom10: String
        EmployeeType: String
        Fax: String
        FirmName: String
        FirstName: String
        FullName: String
        Name: String
        minHireDate: String
        maxHireDate: String
        minHoursPerWeek: Int
        maxHoursPerWeek: Int
        LastName: String
        LEEDAccredited: String
        LicensesAndRegistrations: String
        LOB_EmployeeRecord: String
        LOB_EntityCategory: String
        LOB_EntityID: String
        minLOB_EM_CustDat01: String
        maxLOB_EM_CustDat01: String
        minLOB_EM_CustDat02: String
        maxLOB_EM_CustDat02: String
        minLOB_EM_CustDat02: String
        maxLOB_EM_CustDat02: String
        minLOB_EM_CustDat03: String
        maxLOB_EM_CustDat03: String
        minLOB_EM_CustDat04: String
        maxLOB_EM_CustDat04: String
        minLOB_EM_CustDat05: String
        maxLOB_EM_CustDat05: String
        minLOB_EM_CustNum01: String
        maxLOB_EM_CustNum01: Float
        minLOB_EM_CustNum02: Float
        maxLOB_EM_CustNum02: Float
        minLOB_EM_CustNum03: Float
        maxLOB_EM_CustNum03: Float
        minLOB_EM_CustNum04: Float
        maxLOB_EM_CustNum04: Float
        minLOB_EM_CustNum05: Float
        maxLOB_EM_CustNum05: Float
        LOB_EM_CustTxt01: String
        LOB_EM_CustTxt02: String
        LOB_EM_CustTxt03: String
        LOB_EM_CustTxt04: String
        LOB_EM_CustTxt05: String
        LOB_EM_CustVar01: String
        LOB_EM_CustVar02: String
        LOB_EM_CustVar03: String
        LOB_EM_CustVar04: String
        LOB_EM_CustVar05: String
        LOB_EM_CustVar06: String
        LOB_EM_CustVar07: String
        LOB_EM_CustVar08: String
        LOB_EM_CustVar09: String
        LOB_EM_CustVar10: String
        LOB_EM_CustVar11: String
        LOB_EM_CustVar12: String
        LOB_EM_CustVar13: String
        LOB_EM_CustVar14: String
        LOB_EM_CustVar15: String
        MobilePhone: String
        NCARB: String
        Office: String
        minOpportunityCount: Int
        maxOpportunityCount: Int
        Org: String
        OrgName: String
        PersonalBio: String
        PIM_EmployeeRecord: String
        PIM_EntityCategory: String
        PIM_EntityID: String
        minPIM_EM_CustDat01: String
        maxPIM_EM_CustDat01: String
        minPIM_EM_CustNum01: Float
        maxPIM_EM_CustNum01: Float
        PIM_EM_CustTxt01: String
        PIM_EM_CustTxt02: String
        PIM_EM_CustTxt03: String
        PIM_EM_CustVar01: String
        PIM_EM_CustVar02: String
        PIM_EM_CustVar03: String
        PIM_EM_CustVar04: String
        PIM_EM_CustVar05: String
        PreferredName: String
        ProfessionalAffiliations: String
        ProfessionalEngineer: String
        ProfileLastModifiedBy: String
        minProjectCount: Int
        maxProjectCount: Int
        ProjectRoles: String
        ProjectTypes: String
        RegisteredArchitect: String
        ResourceFor: String
        minSharepointID: Int
        maxSharepointID: Int
        SharepointLogin: String
        SharepointUserName: String
        ShowInCompanyDirectory: String
        Skills: String
        SourceSystem: String
        Status: String
        Title: String
        WorkPhone: String
        WorkPhoneExtension: String
        WorkPhonePlusExtension: String
        WSS_EmployeeRecordCustom01: String
        WSS_EmployeeRecordCustom02: String
        WSS_EmployeeRecordCustom03: String
        WSS_EmployeeResumes: String
        minYearsWithFirm: Int
        maxYearsWithFirm: Int
        minPriorYearsFirm: Int
        maxPriorYearsFirm: Int
        PrimaryImageID: String
        minModDate: String
        maxModDate: String
    }

    input CompanyURLParams {
        perPage: Int
        pageNum: Int
        AddressDesc: String
        City: String
        CompanyInLOBSystem: String
        CompanyInPIMSystem: String
        CompanyName: String
        CompanyNumber: String
        CompanyProfile_Custom01: String
        CompanyProfile_Custom02: String
        CompanyProfile_Custom03: String
        CompanyProfile_Custom04: String
        CompanyProfile_Custom05: String
        CompanyProfile_Custom06: String
        CompanyProfile_Custom07: String
        CompanyProfile_Custom08: String
        CompanyProfile_Custom09: String
        CompanyProfile_Custom10: String
        CompanyType: String
        minContactCount: Int
        maxContactCount: Int
        Country: String
        DisabledVetOwnedSmallBusiness: String
        DisadvBusiness: String
        DisciplineDescription: String
        Email: String
        minEmployeeCount: Int
        maxEmployeeCount: Int
        Fax: String
        HBCU: String
        LOB_CompanyRecord: String
        LOB_EntityCategory: String
        LOB_EntityID: String
        minLOB_CV_CustDat01: String
        maxLOB_CV_CustDat01: String
        minLOB_CV_CustDat02: String
        maxLOB_CV_CustDat02: String
        minLOB_CV_CustDat02: String
        maxLOB_CV_CustDat02: String
        minLOB_CV_CustDat03: String
        maxLOB_CV_CustDat03: String
        minLOB_CV_CustDat04: String
        maxLOB_CV_CustDat04: String
        minLOB_CV_CustDat05: String
        maxLOB_CV_CustDat05: String
        minLOB_CV_CustNum01: String
        maxLOB_CV_CustNum01: Float
        minLOB_CV_CustNum02: Float
        maxLOB_CV_CustNum02: Float
        minLOB_CV_CustNum03: Float
        maxLOB_CV_CustNum03: Float
        minLOB_CV_CustNum04: Float
        maxLOB_CV_CustNum04: Float
        minLOB_CV_CustNum05: Float
        maxLOB_CV_CustNum05: Float
        LOB_CV_CustTxt01: String
        LOB_CV_CustTxt02: String
        LOB_CV_CustTxt03: String
        LOB_CV_CustTxt04: String
        LOB_CV_CustTxt05: String
        LOB_CV_CustVar01: String
        LOB_CV_CustVar02: String
        LOB_CV_CustVar03: String
        LOB_CV_CustVar04: String
        LOB_CV_CustVar05: String
        LOB_CV_CustVar06: String
        LOB_CV_CustVar07: String
        LOB_CV_CustVar08: String
        LOB_CV_CustVar09: String
        LOB_CV_CustVar10: String
        LOB_CV_CustVar11: String
        LOB_CV_CustVar12: String
        LOB_CV_CustVar13: String
        LOB_CV_CustVar14: String
        LOB_CV_CustVar15: String
        MinorityBusiness: String
        Notes: String
        minOpportunityCount: Int
        maxOpportunityCount: Int
        Phone: String
        PIM_CompanyRecord: String
        PIM_EntityCategory: String
        PIM_EntityID: String
        minPIM_CV_CustDat01: String
        maxPIM_CV_CustDat01: String
        minPIM_CV_CustNum01: Float
        maxPIM_CV_CustNum01: Float
        PIM_CV_CustTxt01: String
        PIM_CV_CustTxt02: String
        PIM_CV_CustTxt03: String
        PIM_CV_CustVar01: String
        PIM_CV_CustVar02: String
        PIM_CV_CustVar03: String
        PIM_CV_CustVar04: String
        PIM_CV_CustVar05: String
        PrimaryDiscipline: String
        PriorWork: String
        ProfileLastModifiedBy: String
        minProjectCount: Int
        maxProjectCount: Int
        ProjectRoles: String
        Recommend: String
        RelationshipStatus: String
        ShowInDirectory: String
        SmallBusiness: String
        SourceSystem: String
        State: String
        Status: String
        StreetAddress1: String
        StreetAddress2: String
        StreetAddress3: String
        StreetAddress4: String
        VetOwnedSmallBusiness: String
        Website: String
        WomanOwned: String
        WSS_CompanyRecordCustom01: String
        WSS_CompanyRecordCustom02: String
        WSS_CompanyRecordCustom03: String
        ZIP: String
        PrimaryImageID: String
        minModDate: String
        maxModDate: String
    }

    input ContactURLParams {
        perPage: Int
        pageNum: Int
        AddressDesc: String
        minCampaignCount: Int
        maxCampaignCount: Int
        City: String
        CompanyID: String
        CompanyName: String
        CompanyPrimaryDiscipline: String
        ContactFirstName: String
        ContactInLOBSystem: String
        ContactInPIMSystem: String
        ContactLastName: String
        ContactName: String
        ContactPreferredName: String
        ContactProfile_Custom01: String
        ContactProfile_Custom02: String
        ContactProfile_Custom03: String
        ContactProfile_Custom04: String
        ContactProfile_Custom05: String
        ContactProfile_Custom06: String
        ContactProfile_Custom07: String
        ContactProfile_Custom08: String
        ContactProfile_Custom09: String
        ContactProfile_Custom10: String
        ContactType: String
        Country: String
        Department: String
        Email: String
        minEmployeeCount: Int
        maxEmployeeCount: Int
        Fax: String
        LOB_ContactRecord: String
        LOB_EntityCategory: String
        LOB_EntityID: String
        minLOB_CO_CustDat01: String
        maxLOB_CO_CustDat01: String
        minLOB_CO_CustDat02: String
        maxLOB_CO_CustDat02: String
        minLOB_CO_CustDat02: String
        maxLOB_CO_CustDat02: String
        minLOB_CO_CustDat03: String
        maxLOB_CO_CustDat03: String
        minLOB_CO_CustDat04: String
        maxLOB_CO_CustDat04: String
        minLOB_CO_CustDat05: String
        maxLOB_CO_CustDat05: String
        minLOB_CO_CustNum01: String
        maxLOB_CO_CustNum01: Float
        minLOB_CO_CustNum02: Float
        maxLOB_CO_CustNum02: Float
        minLOB_CO_CustNum03: Float
        maxLOB_CO_CustNum03: Float
        minLOB_CO_CustNum04: Float
        maxLOB_CO_CustNum04: Float
        minLOB_CO_CustNum05: Float
        maxLOB_CO_CustNum05: Float
        LOB_CO_CustTxt01: String
        LOB_CO_CustTxt02: String
        LOB_CO_CustTxt03: String
        LOB_CO_CustTxt04: String
        LOB_CO_CustTxt05: String
        LOB_CO_CustVar01: String
        LOB_CO_CustVar02: String
        LOB_CO_CustVar03: String
        LOB_CO_CustVar04: String
        LOB_CO_CustVar05: String
        LOB_CO_CustVar06: String
        LOB_CO_CustVar07: String
        LOB_CO_CustVar08: String
        LOB_CO_CustVar09: String
        LOB_CO_CustVar10: String
        LOB_CO_CustVar11: String
        LOB_CO_CustVar12: String
        LOB_CO_CustVar13: String
        LOB_CO_CustVar14: String
        LOB_CO_CustVar15: String
        MobilePhone: String
        minOpportunityCount: Int
        maxOpportunityCount: Int
        PIM_ContactRecord: String
        PIM_EntityCategory: String
        PIM_EntityID: String
        minPIM_CO_CustDat01: String
        maxPIM_CO_CustDat01: String
        minPIM_CO_CustNum01: Float
        maxPIM_CO_CustNum01: Float
        PIM_CO_CustTxt01: String
        PIM_CO_CustTxt02: String
        PIM_CO_CustTxt03: String
        PIM_CO_CustVar01: String
        PIM_CO_CustVar02: String
        PIM_CO_CustVar03: String
        PIM_CO_CustVar04: String
        PIM_CO_CustVar05: String
        ProfileLastModifiedBy: String
        minProjectCount: Int
        maxProjectCount: Int
        ProjectRoles: String
        ShowInContactDirectory: String
        SourceSystem: String
        State: String
        Status: String
        StreetAddress1: String
        StreetAddress2: String
        StreetAddress3: String
        StreetAddress4: String
        Title: String
        WorkPhone: String
        WSS_ContactRecordCustom01: String
        WSS_ContactRecordCustom02: String
        WSS_ContactRecordCustom03: String
        ZIP: String
        PrimaryImageID: String
        minModDate: String
        maxModDate: String
    }
  `
  export default Inputs;