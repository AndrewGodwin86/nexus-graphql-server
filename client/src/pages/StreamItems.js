import React from 'react';
import { gql, graphql } from 'react-apollo';
import Loading from '../components/Loading';
import StreamItem from '../components/StreamItem';
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
          <StreamItem key={strItem.entityID} 
          item={strItem.streamItemDetails} />
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