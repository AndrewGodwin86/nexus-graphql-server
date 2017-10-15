const StreamItem = `
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
    deleted: Int
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
`;

export default StreamItem
