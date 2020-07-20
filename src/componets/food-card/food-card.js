import React, { useContext } from 'react';

import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import { Col, Row } from 'react-grid-system';
import './food-card.css'
import { GlobalStore } from '../../stores/global-store/global-store';
import { CURRENCY_EUR, CURRENCY_DOLLAR } from '../../stores/global-store/global-types';





const FoodCard = ({singleFood}) => {

    const {state, addOrderItemToCart} = useContext(GlobalStore);

    const header = (
        <img alt="Card" src={singleFood.url} />
    );

    const footer = (
        <span>
            <Button label="Add to Cart" icon="pi pi-check" style={{marginRight: '.25em'}} onClick={() => addOrderItemToCart(singleFood.id)} />
        </span>
    );

    const getPrice = (price) => {
        if (state.currency === CURRENCY_EUR) {
            return `${price} ${CURRENCY_EUR}`
        }

        return `${(price * state.dollarRate).toFixed(2)} ${CURRENCY_DOLLAR}`; 
    }

    return(
        <>
            <Row>
                <Col className={'mg-bottom'}>
                    <Card title={singleFood.name} subTitle={getPrice(singleFood.price_eur)} style={{width: '360px'}} header={header} footer={footer} className="ui-card-shadow">
                        <div>{singleFood.description}</div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default FoodCard;