// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css'; // 可自行设计样式

function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Paradise Nursery</Link>
      </div>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
