import React, { useContext } from 'react'
import { GlobalStore } from '../../../stores/global-store/global-store';
import FoodCard from '../../../componets/food-card/food-card';
import { Row, Col } from 'react-grid-system';

import './home.css'

const Home = () => {

    const {state} = useContext(GlobalStore);
    
    return(
        <>
            <Row>
                {state.food.map(singFood => {
                    return (
                    <Col lg={4} md={4} xs={12} sm={12} className={'mg'}>
                        <FoodCard singleFood={singFood} key={singFood.id} />
                    </Col>);
                })}
            </Row>
        </>
    )
}

export default Home;