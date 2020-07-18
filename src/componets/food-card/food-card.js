import React from 'react'

import {Card} from 'primereact/card';
import {Button} from 'primereact/button';


const FoodCard = ({singleFood}) => {

    const header = (
        <img alt="Card" src={singleFood.url} />
    );

    const footer = (
        <span>
            <Button label="Add to Cart" icon="pi pi-check" style={{marginRight: '.25em'}} />
        </span>
    );


    return(
        <>
            <Card title={singleFood.name} subTitle={`${singleFood.price_eur}EUR`} style={{width: '360px'}} header={header} footer={footer} className="ui-card-shadow">
                <div>{singleFood.description}</div>
            </Card>
        </>
    )
}

export default FoodCard;