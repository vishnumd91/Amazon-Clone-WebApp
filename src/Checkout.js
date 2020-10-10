import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [ { basket }] = useStateValue();
    return (
        <div className = 'checkout'>
            <div className = 'checkout__left'>
            <img className = 'checkout__ad' src = 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt = ''></img>            
            
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to Basket" next to item.</p>
                </div>
            ) :
            (
                <div>
                    <h2 className = 'checkout__title'>Your Shopping Items</h2>
                    {basket.map( item => (
                        <CheckoutProduct 
                            id= {item.id}
                            title= {item.title}
                            price= {item.price}
                            rating= {item.rating}
                            image= {item.image}
                        />
                    ))}
                </div>
            )}
            </div>

            {/* Creating Subtotal component right to this component */}
            {basket?.length > 0 && (
                <div className = 'checkout__right'>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
