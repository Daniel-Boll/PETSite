import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Member from './Member';
import Project from './Project';
import OldMember from './OldMember';
import OldProject from './OldProject';
import Authentication from './Authentication';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Member" component={Member}/>
                <Route exact path="/Project" component={Project}/>
                <Route exact path="/Forms" render={() => <Authentication isLoggedIn={true}/>}/>
                <Route exact path="/OldMember" component={OldMember}/>
                <Route exact path="/OldProject" component={OldProject}/>
                <Route path="/*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;