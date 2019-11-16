import React from 'react';
import { Grid, Cell, Card, CardActions,CardMenu, CardTitle, CardText, Button, IconButton} from 'react-mdl';

const Landing = () => {
    return (
        <div>
            <Card shadow={0} style={{width: '1600px', margin: 'auto', top: '60px'}}>
                <CardTitle style={{color: '#71B280', height: '80px', background: 'black', opacity: '.8'}}> <h2>Welcome To Wellness Pal</h2></CardTitle>
                    <CardText style={{color: 'black',width: 'auto', height: '200px', background: '#71B280'}}>
                            <h3>Wellness Pal Is Here To Help You Keep Track Of Your Goals</h3>
                            <h3>Make Healthier Choices By Couinting Your Calories</h3>
                            <h3>Wellness Pal is Your Pal When it Comes to Making Healthier Decisions</h3>
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
