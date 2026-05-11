import React from 'react';
import { Link } from 'react-router-dom';
import { brochures } from '../data/BrochureData';
import './MarketingTools.css';


function Brochures() {
    const bgColors = ["#FEF3C7", "#E0F2FE", "#FCE7F3", "#D1FAE5", "#F3E8FF", "#FFEDD5"];

    return (
        <div className="marketing-container">
            {/* Banner */}
            <div className="marketing-banner">
                <div className="banner-content">
                    <h1>Premium Quality<br /><strong>Brochures</strong></h1>
                    <button className="view-product-btn">VIEW PRODUCT</button>
                </div>
                <div className="banner-image">
                    {/* Using the same banner layout, if you have a specific brochure banner image you can update the src */}
                    <img src="/Brochures/brochure-banner.png" alt="Brochures Banner" />
                </div>
            </div>

            {/* Grid */}
            <div className="product-grid">
                {brochures.map((brochure, index) => (
                    <div className="card" key={brochure.id}>
                        <div className="image-wrapper" style={{ backgroundColor: bgColors[index % bgColors.length] }}>
                            <Link to={`/brochures/${brochure.id}`}>
                                <img src={brochure.image} alt={brochure.name} />
                            </Link>
                        </div>

                        <div className="card-content">
                            <p className="card-brand">PrintStop</p>
                            <div className="card-header">
                                <h3>{brochure.name}</h3>
                            </div>
                            <div className="card-pricing">
                                <span className="price-bold">₹ {brochure.basePrice}.00</span>
                                <span className="price-unit">starting price</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Brochures;
