import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const ProjectCard = (props) => {
  return (
      <Card>
        <CardBody>
          <CardTitle>{props.project.projectName}</CardTitle>
          <CardSubtitle>{props.project.projectNumber}</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card placeholder" />
        <CardBody>
          <CardText>Client: {props.project.clientName}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;