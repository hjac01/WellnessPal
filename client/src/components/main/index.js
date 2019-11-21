import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../Landing';
import Profile from '../Profile';
import Login from '../Login';
import Articles from '../Articles';
import CreateAccount from '../CreateAccount';
import Result from "../../pages/Result";



const Main = () => (
    <Switch> 
        <Route exact path='/' component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
    

        <Route path='/createAccount' component={CreateAccount} />
        <Route path='/result' components={Result} />


    </Switch>
)

export default Main;