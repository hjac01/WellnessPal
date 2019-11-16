import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Landing from '../landing';
import Profile from '../profile'
import Login from '../login';
import CreateAcount from '../createAcoutn';

const Main = () => (
    <Switch> 
        <Route exact path='/' component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
        <Route path='/createAcount' component={CreateAcount} />
        <Route path='/resolve' components={ArticleResults} />
    </Switch>
)

export default Main;