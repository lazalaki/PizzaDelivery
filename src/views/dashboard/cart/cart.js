import React, { useContext } from 'react'
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { GlobalStore } from '../../../stores/global-store/global-store';
import Input from '../../../componets/input/input';
import { addressPlaceholder } from '../dashboardTranslation';
import { Col } from 'react-grid-system';
import { Card } from 'primereact/card';
import { CURRENCY_EUR , CURRENCY_DOLLAR} from '../../../stores/global-store/global-types';
import {Button} from 'primereact/button'
import { complateOrderRequest } from '../../../services/api/orders/orders-service';
import { dashboardRoute } from '../../../shared/routes/routes';
import { withRouter } from 'react-router-dom';

const Cart = ({history}) => {

    const {state, removeItemFromCart, showError, showSuccess, getCurrentOrder} = useContext(GlobalStore)

    const { t: translate } = useTranslation()
    const formik = useFormik({
        initialValues: {
            address: ''
        }
    })
    
    if(!state.currentOrder || (state.currentOrder.order_items && state.currentOrder.order_items.length == 0)) {
        return <h3>Your cart is currently empty</h3>
    }

    const removeItem = (id) => {
        removeItemFromCart(id)
    }

    const renderListItem = (item) => {
        return (
            <Col key={item.id} lg={12} md={12} xs={12} sm={12}>
                <Card className={'mg-bottom'}>        
                    <div>
                        <div className="p-grid">
                            <div className="p-col-12">Name: {item.food.name}</div>
                            <div>Price: {calculatePrice(item.food.price_eur)} {state.CURRENCY_EUR}</div>
                        </div>
                    </div>
                    <Button label="Remove" className="p-button-rounded p-button-danger" onClick={() => removeItem(item.id)}/>
                </Card>
            </Col>
        );
    };

    const calculatePrice = (price) => {
        let total = 0;
        total = total + price

        if (state.currency === CURRENCY_EUR) {
            return `${total} ${CURRENCY_EUR}`;
        }

        return `${(total * state.dollarRate).toFixed(2)} ${CURRENCY_DOLLAR}`;         
    }

    const onSubmitHandler = async () => {
        try {
            await complateOrderRequest(state.user.id, state.currentOrder.id, formik.values)        
            showSuccess('You have complated your order')
            getCurrentOrder();
            history.push(dashboardRoute())
        } catch(error) {
            showError(error.message)
        }
    }
    
    return(
        <>
            <h2>Cart:</h2>
            {state.currentOrder.order_items.map(item => {
                return renderListItem(item);
            })}
            <Input 
                type={'address'} 
                name={"address"} 
                onChange={formik.handleChange} 
                value={formik.values.address}
                label={translate(addressPlaceholder)}
                formik={formik}
                className={'input'}
            />
            <Button label="Submit" disabled={!(formik.isValid && formik.dirty)} className="p-button-rounded" onClick={onSubmitHandler} /> 
        </>
    )
}


export default withRouter(Cart);

