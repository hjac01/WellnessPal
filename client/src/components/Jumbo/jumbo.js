import React from 'react';
import "./jumbo.css"
import { Jumbotron, Container } from 'reactstrap';


const Jumbo = (props) => {
    
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WellnessPal</h1>
          <p className="lead">Welcome to WellnessPal, let us provide you the building blocks for a better life.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
