import React from 'react';
import { gql, graphql } from 'react-apollo';
import Loading from '../components/Loading';
import ProjectCard from '../components/ProjectCard';
import { Container, Row, Col } from 'reactstrap';


const Projects = ({ data: {loading, error, projectList }}) => {
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
        <h1 className="page-header">Projects</h1>
          { projectList.map( proj => 
            (
              <Col key={proj.projectDetails.projectID} md="4">
                <ProjectCard project={proj.projectDetails} />
              </Col>
            )
            )
          }
      </Row>
    </Container>
  );
};

export const projectsListQuery = gql`
{
    projectList {
      projectDetails {
        projectID
        projectNumber
        projectName
        clientName
        modDate
      }
    }
  }
`;

export default graphql(projectsListQuery, {
  options: {},
})(Projects);