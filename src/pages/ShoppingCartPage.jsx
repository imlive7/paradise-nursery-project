// src/pages/ShoppingCartPage.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const cart = useSelector((state) => state.cart);
  const cartItemsArray = Object.values(cart.items);

  return (
    <div>
      <Header />
      <div className="shopping-cart-page">
        <h2>Your Shopping Cart</h2>
        <div className="cart-summary">
          <p>Total Items: {cart.totalQuantity}</p>
          <p>Total Cost: ${cart.totalAmount.toFixed(2)}</p>
        </div>
        <div className="cart-items">
          {cartItemsArray.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItemsArray.map((item) => (
              <CartItem key={item.id} item={item} />
            ))
          )}
        </div>
        <div className="cart-actions">
          <Link to="/products">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
          <button className="checkout" onClick={() => alert('Coming Soon')}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
