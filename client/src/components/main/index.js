import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../Landing';
<<<<<<< HEAD
import Profile from '../Profile'
=======
import Profile from '../Profile';
>>>>>>> 820d95c8b8aad30b9d45416de5320440273ce3a2
import Login from '../Login';
import Articles from '../Articles';
import CreateAccount from '../CreateAccount';



const Main = () => (
    <Switch> 
        <Route exact path='/' component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />

<<<<<<< HEAD
        <Route path='/createAcount' component={CreateAccount} />
=======
        <Route path='/createAccount' component={CreateAccount} />
>>>>>>> 820d95c8b8aad30b9d45416de5320440273ce3a2
        <Route path='/articles' components={Articles} />


    </Switch>
)

export default Main;