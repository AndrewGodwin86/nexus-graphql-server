const Entity = `
  type Entity {
    entityID: ID!
    entityName: String
    modDate: String
    project: Project
    employee: Employee
    company: Company
    contact: Contact
    opportunity: Opportunity
  }
`;

export default Entity;
