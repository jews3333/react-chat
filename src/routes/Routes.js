import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Main, Chat } from './index';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </Router>
    )
}

export default Routes;