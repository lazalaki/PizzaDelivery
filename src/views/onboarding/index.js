import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { loginRoute, registerRoute } from '../../shared/routes/routes'
import Login from './login/login'
import Register from './registration/register'


const Onboarding = () => {
    return(
        <div>
            <Switch>
                <Route path={loginRoute()} component={Login} />
                <Route path={registerRoute()} component={Register} />
                <Redirect to={loginRoute()} />
            </Switch>
        </div>
    )
}


export default Onboarding