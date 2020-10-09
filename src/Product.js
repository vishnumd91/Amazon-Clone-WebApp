import React from 'react';
import './Product.css';

function Product({ title, price, rating, image }) {
    return (
        <div className = 'product'>
            <div className = 'product__info'>
                <p>{title}</p>
                <p className = 'product__price'>
                <small>&#8377;</small>
                <strong>{price}</strong>
                </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                    // eslint-disable-next-line jsx-a11y/accessible-emoji
                    <p>⭐</p>
                ))}
            </div>
        </div>
            <img src = {image} alt = ''></img>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
