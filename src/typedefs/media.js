const Media = `
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
`;

export default Media;
