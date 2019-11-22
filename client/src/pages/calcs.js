import React from 'react';
import Bmi from "../components/BMI"
import Bmr from "../components/BMR"
import "../pages/calcs.css"

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const calcs = () => {
    return (
      <div class= "flex-container" id="calcs">
             <Card id="Bmi">

                 <CardBody>
                 <Bmi />
                 </CardBody>
                </Card>
<br></br>
                 <Card id="Bmr">
                  <CardBody>
                  <Bmr />
                  </CardBody>
                   </Card>
                 </div>     

    )
};

export default calcs;



