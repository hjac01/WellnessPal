import React from 'react';
import { Card, CardActions, CardTitle, CardText, Button} from 'react-mdl';

const Landing = () => {
    return (
        <div>
            <Card shadow={0} style={{width: '1600px', margin: 'auto', top: '60px'}}>
                <CardTitle style={{color: '#71B280', height: '80px', background: 'black', opacity: '.8'}}> <h2>Welcome To WellnessPal</h2></CardTitle>
                    <CardText style={{color: 'black',width: 'auto', height: '200px', background: '#71B280'}}>
                            <h3>WellnessPal your new health and wellness companion</h3>
                            <h3>Stay on track with your fitness goals and reach them!</h3>
                    </CardText>
                <CardActions border style={{background: '#71B280'}}>
                    <Button raised accent ripple>Log In</Button>
                    <p>Try Now For Free</p>
                </CardActions>

            </Card>
        </div>
    );
};

export default Landing;
