import React, { useContext } from 'react'

import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import { GlobalStore } from '../../stores/global-store/global-store';
import { withRouter } from 'react-router-dom';
import { loginRoute, dashboardRoute, orderRoute, cartRoute } from '../../shared/routes/routes';

const CustomHeader = ({history}) => {

    const {state, logout, setEurAsCurrency, setDollarAsCurrency} = useContext(GlobalStore)

    const loggedInLinks = [
        { label: 'Home', command: () => onClick('menu')},
        { label: 'Orders', command: () => onClick('order')},
        { label: 'Cart', icon: 'pi pi-shopping-cart', command: () => onClick('cart') },
        { label: 'EUR', command: () => onClick('eur')},
        {label: 'USD', command: () => onClick('usd')}
    ]

    const loggedOutLinks = [
        { label: 'Home', command: () => onClick('menu') },
    ]
    const setItems = () => {
        if (state.isLoggedIn) return loggedInLinks;
        return loggedOutLinks
    }

    const loggInRoute = () => {
        history.push(loginRoute())
    }


    const onClick = (btnLabel) => {
        switch(btnLabel) {
            case 'menu':
                history.push(dashboardRoute())
                break;
            case 'order':
                history.push(orderRoute())
                break;
            case 'cart':
                history.push(cartRoute())
                break;
            case 'eur':
                setEurAsCurrency();
                break;
            case 'usd':
                setDollarAsCurrency()
                break;
            default: 
                history.push(dashboardRoute())
        }
    }

    return(
        <>
            <Menubar model={setItems()} >
                {state.isLoggedIn 
                    ? <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}} onClick={logout}/> 
                    : <Button label="Login" icon="pi pi-power-off" style={{marginLeft:4}} onClick={loggInRoute}/>}                
            </Menubar>
        </>
    )
}


export default withRouter(CustomHeader);