import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Landing from '../landing';
import Profile from '../profile'
import Login from '../login';
import Articles from '../Articles';
import CreateAcount from '../createAcoutn';
=======
import Landing from '../Landing/index';
import Profile from '../Profile/index';
import Login from '../Login/index';
import Articles from '../Articles/index'; 
import CreateAccount from '../CreateAccount/index';

const Main = () => (
    <Switch> 
        <Route exact path='/' component={Landing} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />

        <Route path='/createAcount' component={CreateAcount} />
        <Route path='/articles' components={Articles} />
=======
        <Route path='/CreateAccount' component={CreateAccount} />
        <Route path='/results' components={Articles} />

    </Switch>
)

export default Main;