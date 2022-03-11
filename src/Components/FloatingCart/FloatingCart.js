import React from 'react';
import { Link } from "react-router-dom";
import cartIcon from "./shopping-cart.svg";
import "./FloatingCart.css";
import { useSelector } from "react-redux";

function FloatingCart() {

    const shoppingCart = useSelector(state => state)

    let totalItems = 0;

    for (const item of shoppingCart.cart) {
        totalItems += item.quantity
    }

    return (
        <Link to="/shoppingCart">
            <div className='floating-cart'>
                <p>Votre panier</p>
                <div className="img-notif-container">
                    <img src={cartIcon} alt="icone caddy" />
                    <span className="notif">{totalItems}</span>
                </div>
            </div>
        </Link>
    );
}

export default FloatingCart;