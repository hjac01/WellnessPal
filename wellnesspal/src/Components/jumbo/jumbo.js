import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = (props) => {
    
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WellnessPal</h1>
          <p className="lead">Welcome to WellnessPal, don't forget to update your food and exercise logs</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;

