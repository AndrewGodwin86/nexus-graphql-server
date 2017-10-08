import React from 'react';
import { Container, Row } from 'reactstrap';

export default class Index extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1 className="page-header">Nexus GraphQL</h1>
        </Row>
        
        <Row>
          <iframe src="http://localhost:4000/graphiql" title="GraphQL" className="clientGraphiql"></iframe>
        </Row>
      </Container>
    );
  }
}