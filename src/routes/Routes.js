import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Chat, Sign } from './index';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Sign} />
                <Route path="/chat" component={Chat} />
            </Switch>
        </Router>
    )
}

export default Routes;