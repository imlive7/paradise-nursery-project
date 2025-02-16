// src/components/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, deleteItem } from '../redux/cartSlice';
import './CartItem.css';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementItem(item.id));
  };

  const handleDecrement = () => {
    dispatch(decrementItem(item.id));
  };

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>Unit Price: ${item.price.toFixed(2)}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button onClick={handleDelete} className="delete-button">
        Delete
      </button>
    </div>
  );
}

export default CartItem;
