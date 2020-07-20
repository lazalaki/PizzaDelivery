import React, {useRef, useEffect, useContext} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

import { onboardingRoute, dashboardRoute } from '../shared/routes/routes'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import {Growl} from 'primereact/growl';
import CustomHeader from '../componets/navbar/navbar'
import { GlobalStore } from '../stores/global-store/global-store';
import Onboarding from './onboarding';
import Dashboard from './dashboard';

const View = () => {

  const {state, clearToast} = useContext(GlobalStore);

  let growl = useRef(null);

  useEffect(() => {
    if (state) {
      const toast = state.toast;
      if (toast) {
        if (toast.type === 'error') {
          showError(toast.message)
        } else {
          showSuccess(toast.message)
        }
      clearToast();
      }
    }
  }, [state && state.toast])

  const showSuccess = (message) => {
    growl.current.show({severity: 'success', summary: 'Success', detail: message});
  }

  const showError = (message) => {
      growl.current.show({severity: 'error', summary: 'Error', detail: message});
  }

  return (
      <>
      <Growl ref={growl} />
        <CustomHeader />
        <Switch>
          <Route path={onboardingRoute()} component={Onboarding} />
          <Route path={dashboardRoute()} component={Dashboard} />        
          <Redirect to={onboardingRoute()} />
        </Switch>
      </>
  )
}

export default View;