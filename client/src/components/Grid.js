import React from 'react';
import { Container, Row } from 'reactstrap';
import Projects from './Projects';

export default class Grid extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Projects</h1>
        </Row>
        <Projects />
      </Container>
    );
  }
}