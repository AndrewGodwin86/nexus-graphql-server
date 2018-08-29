const Entity = `
  type Entity {
    entityID: ID!
    entityName: String
    modDate: String
    project: Project
    employee: Employee
    company: Company
    contact: Contact
  }
`;

export default Entity;
