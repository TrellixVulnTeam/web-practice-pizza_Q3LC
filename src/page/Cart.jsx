import React from 'react';
import cart from '../assets/img/empty-cart.png'

function Cart(props) {
    return (
        <div className="cart">
            <div className="container">
                <div className="content">
                    <img className="cart__empty" src={cart} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Cart;