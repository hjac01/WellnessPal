import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../landing';
import Profile from '../profile';
import Login from '../login';
import Articles from '../Articles';
import CreateAccount from '../CreateAccount';
import Calcs from "../../pages/calcs";



const Main = () => (
    <Switch> 
        <Route exact path='/' component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
        <Route path='/calcs' component={Calcs} />
        <Route path='/createAccount' component={CreateAccount} />
        <Route path='/articles' component={Articles} />
        

    </Switch>
)

export default Main;