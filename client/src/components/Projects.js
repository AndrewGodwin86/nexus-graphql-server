import React from 'react';
import { gql, graphql } from 'react-apollo';
import Loading from './Loading';
import ProjectCard from './ProjectCard';
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';


const Projects = ({ data: {loading, error, projectList }}) => {
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Row>
        { projectList.map( proj => 
          (
            <Col key={proj.projectDetails.projectID} md="4">
              <ProjectCard project={proj.projectDetails} />
            </Col>
          )
          )
        }
    </Row>
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