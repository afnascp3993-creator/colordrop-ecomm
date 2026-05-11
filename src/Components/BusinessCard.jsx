import React from 'react';
import { Link } from 'react-router-dom';
import { businessCards } from '../data/businessCardData';
import './BusinessCard.css';


function BusinessCard() {
   
    return (
        <div className="marketing-container">
            {/* Banner */}
            <div className="marketing-banner">
                <div className="banner-content">
                    <h1>Premium Quality<br /><strong>Business Cards</strong></h1>
                    <button className="view-product-btn">VIEW PRODUCT</button>
                </div>
                <div className="banner-image">
                    {/* Using the same banner or a generic one if you have it. You can change the image src later. */}
                   <img src="/BusinessCard/visitingcard-banner.png" alt="Business Cards Banner" />
                </div>
            </div>

            {/* Grid */}
                       {/* Grid */}
            <div className="product-grid">
                {businessCards.map((card, index) => (
                    <div className="card" key={card.id}>
                        <div className="image-wrapper" >
                            <Link to={`/businesscard/${card.id}`}>
                                <img src={card.image} alt={card.name} />
                            </Link>
                        </div>

                        <div className="card-content">
                            <p className="card-brand">PrintStop</p>
                            <div className="card-header">
                                <h3>{card.name}</h3>
                            </div>
                            <div className="card-pricing">
                                <span className="price-bold">₹ {card.basePrice}.00</span>
                                <span className="price-unit"> for 100 pieces</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default BusinessCard;
