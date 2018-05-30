import React from "react";
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import HistoryPage from './pages/HistoryPage';

class Routes extends React.Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path="/team" component={TeamPage} />
                <Route exact path="/history" component={HistoryPage} />
                <Route render = { function() {
                return <h1>Not Found</h1>;
                }} />
            </Switch>
        );
    }
}

export default Routes;