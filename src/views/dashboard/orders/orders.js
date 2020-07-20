import React, { useContext, useEffect } from 'react';

import { GlobalStore } from '../../../stores/global-store/global-store';
import {Card} from 'primereact/card';
import Moment from 'react-moment';

import { Row, Col } from 'react-grid-system';
import './orders.css'
import { CURRENCY_EUR, CURRENCY_DOLLAR } from '../../../stores/global-store/global-types';


const Orders = () => {

    const {state, getOrders} = useContext(GlobalStore)

    useEffect(() => {
        if (state.user && state.user.id) {
            getOrders()
        }
    }, [])

    const renderListItem = (order) => {
        return (
            <Col key={order.id} lg={12} md={12} xs={12} sm={12}>
                <Card className={'mg-bottom'}>        
                    <div>
                        <div className="p-grid">
                            <div className="p-col-12">Description: {order.order_items.map(item => `${item.food.name}, `)}</div>
                            <div className="p-col-12">Address: <b>{order.address}</b></div>
                            <div>Price: {calculatePrice(order.order_items.map(item => item.food.price_eur))}</div>
                            <div className="p-col-12">Created At: <Moment format="DD/MM/YYYY HH:mm">{order.created_at}</Moment></div>
                        </div>
                    </div>
                </Card>
            </Col>
        );
    };

    const calculatePrice = (prices) => {
        let total = 0;
        prices.forEach(price => {
            total = total + price;
        })
        if (state.currency === CURRENCY_EUR) {
            return `${total} ${CURRENCY_EUR}`;;
        }

        return `${(total * state.dollarRate).toFixed(2)} ${CURRENCY_DOLLAR}`;         
    }

    return(
        <>
            <h2>Orders:</h2>
            <Row>
                {state.orders.map(order => {
                    return renderListItem(order)
                })}
            </Row>
        </>
    )
}

export default Orders

