// src/components/PlantCard.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import './PlantCard.css';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  // 根据 Redux 状态判断当前植物是否已添加到购物车
  const [added, setAdded] = useState(!!cartItems[plant.id]);

  // 当全局购物车发生变化时，同步按钮状态
  useEffect(() => {
    setAdded(!!cartItems[plant.id]);
  }, [cartItems, plant.id]);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
    // 添加后按钮会被禁用
    setAdded(true);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>{plant.description}</p>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default PlantCard;
