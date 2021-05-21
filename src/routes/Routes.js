import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './index';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default Routes;