import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Onboarding from './views/onboarding';
import { onboardingRoute, dashboardRoute } from './shared/routes/routes'
import Dashboard from './views/dashboard/dashboard'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import {GlobalStoreProvider} from './stores/global-store/global-store';


function App() {
  return (
    <div>
      <GlobalStoreProvider>
      <Switch>
        <Route path={onboardingRoute()} component={Onboarding} />
        <Route path={dashboardRoute()} component={Dashboard} />
        <Redirect to={onboardingRoute()} />
      </Switch>
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
