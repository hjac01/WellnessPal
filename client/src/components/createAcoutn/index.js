import React from 'react';
import {Card, CardTitle, CardText, Textfield, Button} from 'react-mdl';

const CreateAcount = () => {
    return (
        <div>
             <Card shadow={0} style={{width: '1600px', margin: 'auto', top: '60px'}}>
                <CardTitle style={{color: '#71B280', height: '80px', background: 'black', opacity: '.8'}}> <h2>Sign In To Wellness Pal</h2></CardTitle>
                    <CardText style={{color: 'black',width: 'auto', height: '600px', background: '#71B280'}}>
                    <div>
                        <Textfield
                            onChange={() => {}}
                            label="Full Name"
                            style={{width: '800px'}}
                        />
                    </div>

                    <div>
                        <Textfield
                            onChange={() => {}}
                            label="Email@example.com"
                            style={{width: '800px'}}
                        />
                    </div>

                    <div>    
                        <Textfield
                            onChange={() => {}}
                            label="Password"
                            style={{width: '800px'}}
                        />
                    </div>

                    <div>    
                        <Textfield
                            onChange={() => {}}
                            label="Age"
                            style={{width: '800px'}}
                        />
                    </div>

                    <div>    
                        <Textfield
                            onChange={() => {}}
                            label="Current Weight"
                            style={{width: '800px'}}
                        />
                    </div>

                    <div>    
                        <Textfield
                            onChange={() => {}}
                            label="Target Weight"
                            style={{width: '800px'}}
                        />
                    </div>


                    <Button raised accent ripple>CreateAcount</Button>
                    </CardText>
            </Card>
        </div>
    );
};

export default CreateAcount;