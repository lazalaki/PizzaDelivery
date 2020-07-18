import React from 'react'
import { Switch, Redirect } from 'react-router-dom';

import Home from './home/home'
import { dashboardRoute } from '../../shared/routes/routes';
import CustomHeader from '../../../componets/navbar/navbar';

const Dashboard = () => {
    return(
        <>
            <CustomHeader />
            <Switch>
                <Route path={dashboardRoute()} component={Home} />
                <Redirect to={dashboardRoute()} />
            </Switch>
        </>
    )
}


export default Dashboard;