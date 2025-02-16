// src/pages/ProductListingPage.jsx
import React from 'react';
import Header from '../components/Header';
import PlantCard from '../components/PlantCard';
import './ProductListingPage.css';

// 示例植物数据
const plantsData = [
  {
    id: 'plant1',
    name: 'Air Purifying Fern',
    price: 19.99,
    description: 'Helps purify air.',
    image: require('../assets/images/plant1.jpg'),
    category: 'Air Purifying',
  },
  {
    id: 'plant2',
    name: 'Aromatic Lavender',
    price: 14.99,
    description: 'Fills your room with soothing scent.',
    image: require('../assets/images/plant2.jpg'),
    category: 'Aromatic',
  },
  {
    id: 'plant3',
    name: 'Indoor Succulent',
    price: 9.99,
    description: 'Easy to maintain succulent.',
    image: require('../assets/images/plant3.jpg'),
    category: 'Decorative',
  },
  {
    id: 'plant4',
    name: 'Peace Lily',
    price: 24.99,
    description: 'Elegant and easy to grow.',
    image: require('../assets/images/plant4.jpg'),
    category: 'Air Purifying',
  },
  {
    id: 'plant5',
    name: 'Herb Garden',
    price: 29.99,
    description: 'Fresh herbs at your fingertips.',
    image: require('../assets/images/plant5.jpg'),
    category: 'Aromatic',
  },
  {
    id: 'plant6',
    name: 'Orchid Beauty',
    price: 34.99,
    description: 'Stunning and graceful.',
    image: require('../assets/images/plant6.jpg'),
    category: 'Decorative',
  },
];

function ProductListingPage() {
  // 按 category 对植物数据进行分组
  const categories = plantsData.reduce((acc, plant) => {
    if (!acc[plant.category]) {
      acc[plant.category] = [];
    }
    acc[plant.category].push(plant);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      <div className="product-listing">
        {Object.keys(categories).map((category) => (
          <div key={category} className="product-category">
            <h2>{category}</h2>
            <div className="plant-cards-container">
              {categories[category].map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
