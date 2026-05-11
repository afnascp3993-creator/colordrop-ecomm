import React from 'react';
import { Link } from 'react-router-dom';
import { gifts } from '../data/giftitems';
import './MarketingTools.css'; 

function GiftSection() {
    const bgColors = ["#FEF3C7", "#E0F2FE", "#FCE7F3", "#D1FAE5", "#F3E8FF", "#FFEDD5"];

    return (
        <div className="marketing-container">
            {/* Banner */}
            <div className="marketing-banner">
                <div className="banner-content">
                    <h1>Premium Quality<br /><strong>Gift Printing</strong></h1>
                    <button className="view-product-btn">VIEW PRODUCTS</button>
                </div>
                <div className="banner-image">
                    {/* Reusing the generic banner or replace with a gift specific banner */}
                    <img src="/gift/gift-banner.png" alt="Gift Printing Banner" />
                </div>
            </div>

            {/* Grid */}
            <div className="product-grid">
                {gifts.map((gift, index) => (
                    <div className="card" key={gift.id}>
                        <div className="image-wrapper" style={{ backgroundColor: bgColors[index % bgColors.length] }}>
                            <Link to={`/gifts/${gift.id}`}>
                                <img src={gift.image} alt={gift.name} />
                            </Link>
                        </div>

                        <div className="card-content">
                            <p className="card-brand">PrintStop</p>
                            <div className="card-header">
                                <h3>{gift.name}</h3>
                            </div>
                            <div className="card-pricing">
                                <span className="price-bold">₹ {gift.basePrice}.00</span>
                                <span className="price-unit">starting price</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

  
            
        </div>
    );
}

export default GiftSection;
