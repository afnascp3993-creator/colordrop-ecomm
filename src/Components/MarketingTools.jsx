import React from 'react';
import './MarketingTools.css';
import { useCart } from "../../Context/CartContext";
import MarketingImage from "../assets/Stationary_Mockup_005.jpg"
import { products } from '../data/productsData';
import { Link } from 'react-router-dom';
import ServiceHighlights from './ServiceHighlights';

function MarketingTools() {
  const { addToCart } = useCart();
 const bgColors = ["#c3c3fc", "#fadadd", "#fbeea1", "#c3c3fc", "#fadadd", "#c3c3fc"];



  return (
    <div className="marketing-container">
      {/* Banner */}
      <div className="marketing-banner">
        <div className="banner-content">
          <h1>Most Effective<br/><strong>Marketing Tools</strong></h1>
          <button className="view-product-btn">VIEW PRODUCT</button>
        </div>
        <div className="banner-image">
          <img src={MarketingImage} alt="Marketing Tools Banner" />
        </div>
      </div>

      {/* Grid */}
      <div className="product-grid">
        {products.map((product, index) => (
                   <div className="card" key={product.id}>
            <div className="image-wrapper" style={{ backgroundColor: bgColors[index % bgColors.length] }}>
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} />
              </Link>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h3>{product.name}</h3>
                
              </div>
              <p className="desc">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
   
     
    </div>
  );
}

export default MarketingTools;
