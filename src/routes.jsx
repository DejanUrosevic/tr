import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LogInComponent from './containers/LogInComponent';
import HomeComponent from './containers/HomeComponent';

class Router extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={LogInComponent} />
                <Route exact path="/home" component={HomeComponent} />
            </div>
        )
    }
}


export default Router;