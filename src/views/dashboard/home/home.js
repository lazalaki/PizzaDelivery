import React, { useContext, useEffect, useState } from 'react'
import { GlobalStore } from '../../../stores/global-store/global-store';
import FoodCard from '../../../componets/food-card/food-card';


const Home = () => {

    const {state} = useContext(GlobalStore);

    const [name, setName] = useState('');

    useEffect(() => {
        const user = state.user;
        if (user) {
            setName(user.first_name);
        }
    }, [state.user])

    
    return(
        <>
            Home {name}
            {state.isLoggedIn ? 'ulogovan' : 'nije'}
            {state.food.map(singFood => {
                return <FoodCard singleFood={singFood} key={singFood.id} />
            })}
        </>
    )
}

export default Home;