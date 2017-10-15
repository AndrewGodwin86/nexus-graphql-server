const Relationship = `
  type Relationship { # Complete relationship from api/v1/relationships
    assocType: String
    typeID: String
    entityCategory: String
    entityID: String
    role: String
    roleDescription: String
    modDate: String
    associatedThruLOB: String
    associatedThruPIM: String
    associationSource: String
  }
`;

export default Relationship;
