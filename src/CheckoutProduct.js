import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct( { id, title, price, rating, image }) {

    // eslint-disable-next-line no-empty-pattern
    const [ {}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch(
        {
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className = 'checkoutProduct'>
            <img className = 'checkoutProduct__image' src = {image} alt = '' />
            <div className = 'checkoutProduct__info'>
                <p className = 'checkoutProduct__title'>{title}</p>
                <p className = 'checkoutProduct__price'>
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                        // eslint-disable-next-line jsx-a11y/accessible-emoji
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick = { removeFromBasket }>Remove from Basket</button>
                
            </div>
            
        </div>
    )
}

export default CheckoutProduct
