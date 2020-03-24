import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/PETSite/" component={Home}/>
                <Route path="/PETSite/*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;