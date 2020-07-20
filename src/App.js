import React from 'react';

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import {GlobalStoreProvider, GlobalStore} from './stores/global-store/global-store';
import { Container } from 'react-grid-system';
import View from './views';



function App() {
  return (
    <div>
      <Container>
        <GlobalStoreProvider>
        <View />
        </GlobalStoreProvider>
      </Container>
    </div>
  );
}

export default App;
