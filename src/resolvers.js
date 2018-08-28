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
      return dataSources.nexusAPI.getRelatedEntity("projects", project.projectID, 'awards');
    },
    // TO-DO: projectMedia...
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

/*import fetch from 'node-fetch';

// Set the baseUrl and define general request structure for the Nexus call
const baseUrl = 'https://nexus5.knowledge-architecture.com/api/v1';

const getEntityList = function(entityType, context, perPage) {
  if(perPage) {
    return fetch(`${baseUrl}/${entityType}/?perPage=${perPage}`,{
        headers: {'Authorization': context.secrets.Authorization}
      }).then(res => res.json()).then(data => data["results"])
  } else {
    return fetch(`${baseUrl}/${entityType}/`,{
        headers: context.secrets
      }).then(res => res.json()).then(data => data["results"])
  }

};
const getEntityByID = function(entityType, entityID, context) {
  return fetch(`${baseUrl}/${entityType}/${entityID}/`,{
        headers: {'Authorization': context.secrets.Authorization}
      }).then(res => res.json()).then(data => data["results"][0]);
};

const getRelatedEntityByType = function(entityType, entityID, relatedEntityType, context) {
  return fetch(`${baseUrl}/${entityType}/${entityID}/${relatedEntityType}/`,{
        headers: {'Authorization': context.secrets.Authorization}
      }).then(res => res.json()).then(data => data["results"]);
};

const getPublicMediaURL = function(mediaID, mediaSize, context) {
	return fetch(`${baseUrl}/media/${mediaID}/url/${mediaSize}`,{
		headers: {'Authorization': context.secrets.Authorization}
	}).then(res => res.json()).then(data => data["results"][0])
}

const entities = [{
  id: 1,
  name: 'Projects',
}, {
  id: 2,
  name: 'Employees',
}, {
  id: 3,
  name: 'Companies',
}, {
	id: 4,
	name: 'Contacts',
}, {
	id: 5,
	name: 'Opportunities',
}, {
	id: 6,
	name: 'StreamItems'
}];


export const resolvers = {
  Query: {
    entities: () => {
      return entities;
    },
    project: (root, args, context) => {
      return getEntityByID("Projects", args.projectID, context);
    },
    projectList: (root, args, context) => {
      return getEntityList("projects", context, args.perPage);
    },
    opportunity: (root, args, context) => {
      return getEntityByID("opportunities", args.opportunityID, context);
    },
    opportunityList: (root, args, context) => {
      return getEntityList("opportunities", context, args.perPage);
    },
    employee: (root, args, context) => {
      return getEntityByID("employees", args.employeeID, context);
    },
    employeeList: (root, args, context) => {
      return getEntityList("employees", context, args.perPage);
    },
    contact: (root, args, context) => {
      return getEntityByID("contacts", args.contactID, context);
    },
    contactList: (root, args, context) => {
      return getEntityList("contacts", context, args.perPage);
    },
    company: (root, args, context) => {
      return getEntityByID("companies", args.companyID, context);
    },
    companyList: (root, args, context) => {
      return getEntityList("companies", context, args.perPage);
    },
    streamItem: (root, args, context) => {
      return getEntityByID("streamitems", args.itemID, context);
    },
    streamItemList: (root, args, context) => {
      return getEntityList("streamItems", context, args.perPage);
    },
    mediaList: (root, args, context) => {
    	return getEntityList("media", context, args.perPage);
  	},
    relationshipList: (root, args, context) => {
    	return getEntityList("relationships", context, args.perPage);
  	}
  },
  Project: {
    projectDetails: (project, args, context) => {
      return getEntityByID("projects", project.entityID, context);
    }
  },
  ProjectDetails: {
    projectEmployees: (project, args, context) => {
      return getRelatedEntityByType("projects", project.projectID, "employees", context);
    },
    projectCompanies: (project, args, context) => {
      return getRelatedEntityByType("projects", project.projectID, "companies", context);
    },
    projectContacts: (project, args, context) => {
      return getRelatedEntityByType("projects", project.projectID, "contacts", context);
    },
    projectDescriptions: (project, args, context) => {
      return getRelatedEntityByType("projects", project.projectID, "descriptions", context);
    },
    projectAwards: (project, args, context) => {
      return getRelatedEntityByType("projects", project.projectID, "awards", context);
    },
    projectMedia: (project, args, context) => {
      return getRelatedEntityByType("projects", project.projectID, "media", context);
    },
    // Map BVN custom field names to Synthesis field names
    sectors: (project) => project.loB_PR_CustTxt01,
    yearCompleted: (project) => project.loB_PR_CustVar02,
    originalArchitect: (project) => project.loB_PR_CustVar03,
    alias: (project) => project.loB_PR_CustVar04,
    attribution: (project) => project.loB_PR_CustVar05
  },
  Opportunity: {
    opportunityDetails: (opportunity, args, context) => {
      return getEntityByID("opportunities", opportunity.entityID, context);
    }
  },
  OpportunityDetails: {
    opportunityContacts: (opportunity, args, context) => {
      return getRelatedEntityByType("opportunities", opportunity.opportunityID, "contacts", context);
    },
    opportunityEmployees: (opportunity, args, context) => {
      return getRelatedEntityByType("opportunities", opportunity.opportunityID, "employees", context);
    }
  },
  Employee: {
    employeeDetails: (employee, args, context) => {
      return getEntityByID("employees", employee.entityID, context);
    }
  },
  EmployeeDetails:{
    affiliationsDetail: (employee, args, context) => {
    	return getRelatedEntityByType("employees", employee.employeeID, "affiliations", context);
  	},
    certificationsDetail: (employee, args, context) => {
    	return getRelatedEntityByType("employees", employee.employeeID, "certifications", context);
  	},
    degreesEarnedDetail: (employee, args, context) => {
  	   return getRelatedEntityByType("employees", employee.employeeID, "degrees", context);
  	},
  	registrationsDetail: (employee, args, context) => {
  	   return getRelatedEntityByType("employees", employee.employeeID, "registrations", context);
  	},
    employeeCompanies: (employee, args, context) => {
    	return getRelatedEntityByType("employees", employee.employeeID, "companies", context);
  	},
    employeeContacts: (employee, args, context) => {
      return getRelatedEntityByType("employees", employee.employeeID, "contacts", context);
    },
  	employeeOpportunities: (employee, args, context) => {
    	return getRelatedEntityByType("employees", employee.employeeID, "opportunities", context);
  	},
    employeeProjects: (employee, args, context) => {
    	return getRelatedEntityByType("employees", employee.employeeID, "projects", context);
  	}
  },
  Company: {
    companyDetails: (company, args, context) => {
      return getEntityByID("companies", company.entityID, context);
    }
  },
  CompanyDetails: {
    companyAddresses: (company, args, context) => {
      return getRelatedEntityByType("companies", company.companyID, "addresses", context);
    },
    companyEmployees: (company, args, context) => {
      return getRelatedEntityByType("companies", company.companyID, "employees", context);
    },
    companyContacts: (company, args, context) => {
      return getRelatedEntityByType("companies", company.companyID, "contacts", context);
    },
    companyProjects: (company, args, context) => {
      return getRelatedEntityByType("companies", company.companyID, "projects", context);
    },
    companyOpportunities: (company, args, context) => {
      return getRelatedEntityByType("companies", company.companyID, "opportunities", context);
    },
  },
  Contact: {
    contactDetails: (contact, args, context) => {
      return getEntityByID("contacts", contact.entityID, context);
    }
  },
  ContactDetails: {
    contactEmployees: (contact, args, context) => {
      return getRelatedEntityByType("contacts", contact.contactID, "employees", context);
    },
    contactProjects: (contact, args, context) => {
      return getRelatedEntityByType("contacts", contact.contactID, "projects", context);
    },
    contactOpportunities: (contact, args, context) => {
      return getRelatedEntityByType("contacts", contact.contactID, "opportunities", context);
    }
  },
  StreamItem: {
    streamItemDetails: (streamItem, args, context) => {
    	return getEntityByID("streamItems", streamItem.entityID, context);
    }
  },
  StreamItemDetails: {
  	dateStampString: (streamItem) => {
  		return (new Date(streamItem.dateStamp).toDateString().substring(4,10));
  	},
  	displayEntityImagePublicURL: (streamItem, args, context) => {
  		return getPublicMediaURL(streamItem.displayEntityImageID, "50w50h_fxd", context);
  	},
    likesList: (streamItem, args, context) => {
      return getRelatedEntityByType("streamItems", streamItem.itemID, "likes", context);
    }
  },
  Media: {
    mediaDetails: (media, args, context) => {
      return getEntityByID("media", media.entityID, context);
    }
  }
};


// Export a function to get context from the request. It accepts two
// parameters - headers (lowercased http headers) and secrets
//It must return an object (or a promise resolving to it).
export function context(headers, secrets) {
  return {
    headers,
    secrets,
  };
};*/
