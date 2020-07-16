import React, { useContext, useEffect, useState } from 'react'
import { GlobalStore } from '../../stores/global-store/global-store';

const Dashboard = () => {

    const {state} = useContext(GlobalStore);

    const [name, setName] = useState('');

    useEffect(() => {
        const user = state.user;
        console.log(2)
        console.log(state)
        if (user) {
            setName(user.first_name);
        }
    }, [state.user])

    return(
        <>
            Dashboard {name}
            {state.isLoggedIn ? 'ulogovan' : 'nije'}
        </>
    )
}

export default Dashboard;