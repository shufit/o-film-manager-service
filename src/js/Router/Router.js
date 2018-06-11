import React from 'react';
import {
    Switch,
    HashRouter as Router,
    Route,
    Link,
    BrowserRouter,
    hashHistory,
} from 'react-router-dom';

import ServerHome from '../Pages/Server/ServerHome';
import AppealDetail from '../Pages/Server/AppealDetail';

const routes = [
    { path: '/', component: ServerHome, exact: true },
    { path: '/appealDetail', component: AppealDetail, exact: true },
];

const BasicRoute = () => {
    return (
        <Router history={hashHistory}>
            <Switch>
                {
                    routes.map( route=> (
                        <Route key={route.path} path={route.path} exact={route.exact} component={route.component}/>
                    ))
                }
            </Switch>
        </Router>
    );

};


export default BasicRoute;