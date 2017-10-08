import React from 'react';
import { Container, Row } from 'reactstrap';
import Projects from '../components/Projects';

export default class Index extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Projects</h1>
        </Row>
        <Projects />
        <Row>
          <iframe src="http://localhost:4000/graphiql" title="GraphQL" className="clientGraphiql"></iframe>
        </Row>
      </Container>
    );
  }
}