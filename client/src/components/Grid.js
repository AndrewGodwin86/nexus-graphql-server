import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectCard from './ProjectCard';

export default class Grid extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Projects</h1>
        </Row>
        <Row>
          <Col><ProjectCard /></Col>
          <Col><ProjectCard /></Col>
          <Col><ProjectCard /></Col>
          <Col><ProjectCard /></Col>
        </Row>
      </Container>
    );
  }
}