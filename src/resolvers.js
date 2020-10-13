export const resolvers = {
  Project: {
    projectEmployees: async (project,  args, { dataSources }) => {
      console.log(project.projectID)
      return dataSources.nexusAPI.getRelatedEntity('projects', project.projectID, 'employees');
    },
    projectCompanies: (project, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('projects', project.projectID, 'companies');
    },
    projectContacts: (project, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('projects', project.projectID, 'contacts');
    },
    projectDescriptions: (project, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('projects', project.projectID, 'descriptions');
    },
    projectAwards: (project, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('projects', project.projectID, 'awards');
    },
    // TO-DO: projectMedia...
  },
  Employee: {
    affiliationsDetail: (employee, args, { dataSources }) => {
    	return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'affiliations');
  	},
    certificationsDetail: (employee, args, { dataSources }) => {
    	return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'certifications');
  	},
    degreesEarnedDetail: (employee, args, { dataSources }) => {
  	   return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'degrees');
  	},
  	registrationsDetail: (employee, args, { dataSources }) => {
  	   return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'registrations');
  	},
    employeeCompanies: (employee, args, { dataSources }) => {
    	return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'companies');
  	},
    employeeContacts: (employee, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'contacts');
    },
  	employeeOpportunities: (employee, args, { dataSources }) => {
    	return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'opportunities');
  	},
    employeeProjects: (employee, args, { dataSources }) => {
    	return dataSources.nexusAPI.getRelatedEntity('employees', employee.employeeID, 'projects');
  	}
  },
  Company: {
    companyAddresses: (company, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('companies', company.companyID, 'addresses');
    },
    companyEmployees: (company, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('companies', company.companyID, 'employees');
    },
    companyContacts: (company, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('companies', company.companyID, 'contacts');
    },
    companyProjects: (company, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('companies', company.companyID, 'projects');
    },
    companyOpportunities: (company, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('companies', company.companyID, 'opportunities');
    },
  },
  Contact: {
    contactEmployees: (contact, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('contacts', contact.contactID, 'employees');
    },
    contactProjects: (contact, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('contacts', contact.contactID, 'projects');
    },
    contactOpportunities: (contact, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('contacts', contact.contactID, 'opportunities');
    }
  },
  Opportunity: {
    opportunityContacts: (opportunity, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('opportunities', opportunity.opportunityID, 'contacts');
    },
    opportunityEmployees: (opportunity, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelatedEntity('opportunities', opportunity.opportunityID, 'employees');
    }
  },
  Entity: {
    project: async(entity, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('projects', entity.entityID);
    },
    employee: async (entity, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('employees', entity.entityID);
    },
    company: async (entity, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('companies', entity.entityID);
    },
    contact: async (entity, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('contacts', entity.entityID);
    },
    opportunity: async (entity, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('opportunities', entity.entityID);
    }
  },
  Query: {
    employee: async (_source, { employeeID }, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('employees', employeeID);
    },
    employees: async (_source, args, {dataSources}) => {
      return dataSources.nexusAPI.getEntityList('employees', args);
    },
    project: async (_source, { projectID }, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('projects', projectID);
    },
    projects: async (_source, args, {dataSources}) => {
      return dataSources.nexusAPI.getEntityList('projects', args);
    },
    company: async (_source, { companyID }, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('companies', companyID);
    },
    companies: async (_source, args, {dataSources}) => {
      return dataSources.nexusAPI.getEntityList('companies',args);
    },
    contact: async (_source, { contactID }, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('contacts', contactID);
    },
    contacts: async (_source, args, {dataSources}) => {
      return dataSources.nexusAPI.getEntityList('contacts', args);
    },
    opportunity: async (_source, { opportunityID }, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('opportunities', opportunityID);
    },
    opportunities: async (_source, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntityList('opportunities');
    },
    textLibrary: async (_source, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntity('textlibraries', textLibraryID);
    },
    textLibraries: async (_source, args, { dataSources }) => {
      return dataSources.nexusAPI.getEntityList('textlibraries', args);
    },
    relationships: async (_source, args, { dataSources }) => {
      return dataSources.nexusAPI.getRelationships(args);
    },
    entityColumnMappings: async (_source, args, {dataSources}) => {
      return dataSources.nexusAPI.getEntityColumnMappings();
    }
  },
};