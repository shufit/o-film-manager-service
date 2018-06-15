import React from 'react';
import {
    Switch,
    HashRouter as Router,
    Route,
    Link,
    BrowserRouter,
    hashHistory,
} from 'react-router-dom';

import ClientHome from '../Pages/Client/ClientHome';
import AddAppeal from '../Pages/Client/AddAppeal';
import AppealDetail from '../Pages/Client/AppealDetail';

const routes = [
    { path: '/', component: ClientHome, exact: true },
    { path: '/AddAppeal', component: AddAppeal, exact: true },
    { path: '/AppealDetail', component: AppealDetail, exact: true },
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
