import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const jumbo = (props) => {
    
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WellnessPal</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;

