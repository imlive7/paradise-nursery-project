// src/pages/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import backgroundImage from '../assets/images/background.jpg';

function LandingPage() {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h1>Paradise Nursery</h1>
        <p>
          欢迎来到 Paradise Nursery，我们致力于为您提供优质的室内植物，打造绿色、健康的家居环境。
        </p>
        <Link to="/products">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
