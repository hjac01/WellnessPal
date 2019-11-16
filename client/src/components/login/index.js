import React from 'react';
import {Card, CardTitle, CardText, Button, Textfield} from 'react-mdl';

const Login = () => {
    return (
        <div>
             <Card shadow={0} style={{width: '1600px', margin: 'auto', top: '60px'}}>
                <CardTitle style={{color: '#71B280', height: '80px', background: 'black', opacity: '.8'}}> <h2>Sign In To Wellness Pal</h2></CardTitle>
                    <CardText style={{color: 'black',width: 'auto', height: '200px', background: '#71B280'}}>
                    <Textfield
                        onChange={() => {}}
                        label="Email@example.com"
                        style={{width: '800px'}}
                    />
                    <div></div>
                    <Textfield
                        onChange={() => {}}
                        label="Password"
                        style={{width: '800px'}}
                    />
                    <div></div>
                    <Button raised accent ripple>Sign In</Button>
                    </CardText>
            </Card>
        </div>
    );
};

export default Login;