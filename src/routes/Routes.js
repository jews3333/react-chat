import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Front, Chat, Sign } from './index';

function Routes(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Sign} />
                <Route path="/front" component={Front} />
                <Route path="/chat/:id" component={Chat} />
            </Switch>
        </Router>
    )
}

export default Routes;