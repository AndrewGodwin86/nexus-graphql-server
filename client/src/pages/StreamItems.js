import React from 'react';
import { gql, graphql } from 'react-apollo';
import Loading from '../components/Loading';
import { Container, Row } from 'reactstrap';

const StreamItems = ({ data: {loading, error, streamItemList }}) => {
  if (loading) {
    return (
      <Container>
        <Row>
          <Loading />
        </Row>
      </Container>);
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <Row>
        <h1 className="page-header">StreamItems</h1>
      </Row>
      { streamItemList.map( strItem => 
        (<Row>
          <div key={strItem.entityID} className="updatesRow">
          <div className="divSubjectImage">
            <img src={strItem.streamItemDetails.displayEntityImagePublicURL}  
              alt="Unknown lifeform"
              id={strItem.streamItemDetails.displayEntityImageID}
              className="imgSubjectImage" />
          </div>
          <div className="divStreamBody">
            <div>
              <a className="authorName" href="http://synthesis.bvn.com.au">
                {strItem.streamItemDetails.authorName}
              </a>
              <span className="streamItemDate">{strItem.streamItemDetails.dateStampString}</span>
            </div>
            <span className="streamItemTitle">{strItem.streamItemDetails.titleWithEntityNames}</span>
            <div className="subItemContainer"></div>
            <div className="streamItemFooter">
              <span title="Like this item" className="btnLike">
                <img className="likeIcon" src="../like_off_20.png" /> 
              </span>
              <span>Like</span>
            </div>
          </div>
        </div>
      </Row>)
      )}

    </Container>
  );
};

export const streamItemsListQuery = gql`
{
    streamItemList(perPage:15) {
      entityID
      streamItemDetails {
        titleWithEntityNames
        authorName
        likeCount
        commentCount
        dateStampString
        displayEntityType
        displayEntityID
        displayEntityImageID
        displayEntityImagePublicURL
      }
    }
  }
`;

export default graphql(streamItemsListQuery, {
  options: {},
})(StreamItems);