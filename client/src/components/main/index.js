import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../Landing';
import Profile from '../Profile';
import Login from '../Login';
import Articles from '../Articles';
import CreateAccount from '../CreateAccount';



const Main = () => (
    <Switch> 
        <Route exact path='/' component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />

        <Route path='/createAccount' component={CreateAccount} />
        <Route path='/articles' components={Articles} />


    </Switch>
)

export default Main;