import React, { useContext } from 'react'

import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import { GlobalStore } from '../../stores/global-store/global-store';
import { withRouter } from 'react-router-dom';
import { loginRoute } from '../../shared/routes/routes';

const CustomHeader = ({history}) => {

    const {state, logout} = useContext(GlobalStore)

    const loggedInLinks = [
        { label: 'Menu'},
        { label: 'Order'},
        { label: 'Cart' }
    ]

    const loggedOutLinks = [
        { label: 'Menu' },
    ]
    const setItems = () => {
        if (state.isLoggedIn) return loggedInLinks;
        return loggedOutLinks
    }

    const loggInRoute = () => {
        history.push(loginRoute())
    }



    return(
        <>
            <Menubar model={setItems()}>
                {state.isLoggedIn 
                    ? <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}} onClick={logout}/> 
                    : <Button label="Login" icon="pi pi-power-off" style={{marginLeft:4}} onClick={loggInRoute}/>}                
            </Menubar>
        </>
    )
}


export default withRouter(CustomHeader);