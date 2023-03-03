import React from "react";
export const Product = (props) => {
    const {id,productName,price,productImage} = props.data;
    return (
        <div className='product'>
            <img alt="fota" src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <button onClick='addToCart' className='addToCartBttn'>Add to cart</button>
            </div>
        </div>);
};