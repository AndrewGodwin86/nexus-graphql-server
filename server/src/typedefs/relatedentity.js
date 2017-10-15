const RelatedEntity = `
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
`;

export default RelatedEntity;
