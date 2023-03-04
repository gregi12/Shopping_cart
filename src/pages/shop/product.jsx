import React, { useContext } from "react";
import {ShopContext} from '../../context/context'
export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className='product'>
            <img alt="fota" src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <button onClick= {() => addToCart(id)} className='addToCartBttn'>
                    Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</> } 
                </button>
            </div>
        </div>);
};