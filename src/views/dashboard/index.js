import React from 'react'
import { Switch, Redirect,Route } from 'react-router-dom';

import Home from './home/home'
import { dashboardRoute, cartRoute, orderRoute } from '../../shared/routes/routes';
import Cart from './cart/cart';
import Orders from './orders/orders';

const Dashboard = () => {
    return(
        <>
            <Switch>
                <Route path={dashboardRoute()} component={Home} exact />
                <Route path={orderRoute()} component={Orders} />
                <Route path={cartRoute()} component={Cart} />
                <Redirect to={dashboardRoute()} />
            </Switch>
        </>
    )
}


export default Dashboard;