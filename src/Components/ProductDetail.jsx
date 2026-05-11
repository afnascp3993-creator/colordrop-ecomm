import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/productsData';
import { useCart } from '../../Context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === parseInt(id));

  const [activeTab, setActiveTab] = useState('description');
  const [hasUploadedDesign, setHasUploadedDesign] = useState(false);

  if (!product) {
    return <div className="product-not-found">Product not found. <Link to="/products">Return to shop</Link></div>;
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-detail-container">
      <div className="product-top-section">

        {/* Left Column - Images */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="thumbnails">
            {product.images && product.images.map((imgSrc, index) => (
              <div className="thumb-box" key={index}>
                <img src={imgSrc} alt="thumbnail" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details & Form */}
        <div className="product-info-form">
          <h1 className="product-title">{product.name}</h1>
          {product.category === 'gift' ? (
            <p className="product-short-desc">
              Focus on personalization and gifting experience. High material quality and print clarity. Perfect for birthdays, corporate gifts, and special occasions.
            </p>
          ) : (
            <p className="product-short-desc">
              Emphasize print quality, durability, and professional finish. Suitable for business, marketing, and branding.
            </p>
          )}

          {product.category !== 'gift' && (
            <>
              <div className="form-group">
                <label>Paper Type</label>
                <select>
                  <option>Choose an Option</option>
                  <option>Standard Matte</option>
                  <option>Premium Glossy</option>
                  <option>Textured</option>
                  <option>Mettallic</option>
                  <option>Non Tearable</option>
                </select>
              </div>

              <div className="form-group">
                <label>Size</label>
                <select>
                  <option>Choose an Option</option>
                  <option>A4</option>
                  <option>A5</option>
                  <option>Standard</option>
                </select>
              </div>

              <div className="form-group">
                <label>Lamination</label>
                <select>
                  <option>Choose an Option</option>
                  <option>None</option>
                  <option>Matte Lamination</option>
                  <option>Gloss Lamination</option>
                </select>
              </div>

              <div className="form-group">
                <label>Orientation</label>
                <select>
                  <option>Choose an Option</option>
                  <option>Horizontal</option>
                  <option>Vertical</option>
                </select>
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <select>
                  <option>Choose an Option</option>
                  <option>100</option>
                  <option>250</option>
                  <option>500</option>
                </select>
              </div>

              <div className="form-group">
                <label>2 Sided Printing</label>
                <select>
                  <option>Choose an Option</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </>
          )}

          {product.category === 'gift' && (
            <>
              <div className="form-group">
                <label>Personalization Notes</label>
                <textarea rows="3" placeholder="Enter names, dates, or messages to be printed..." style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', boxSizing: 'border-box' }}></textarea>
              </div>
            </>
          )}

          <div className="form-group upload-group">
            <label>Upload the design art work</label>
            <div className="upload-box" onClick={() => document.getElementById('file-upload').click()} style={{ cursor: 'pointer' }}>
              <span className="upload-icon">↑</span>
              <span className="upload-text">
                {hasUploadedDesign ? "Design Uploaded Successfully ✓" : "Drag & Drop Files Here or"}
              </span>
              <button className="browse-btn" onClick={(e) => e.preventDefault()}>
                {hasUploadedDesign ? "CHANGE FILE" : "BROWSE FILES"}
              </button>
              <input 
                type="file" 
                id="file-upload" 
                style={{display: 'none'}} 
                onChange={(e) => {
                  if(e.target.files && e.target.files.length > 0) {
                    setHasUploadedDesign(true);
                  }
                }} 
              />
            </div>
            <p className="upload-helper">Drag & Drop Files Here or</p>
          </div>

          {hasUploadedDesign && (
            <button className="pd-add-to-cart-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs">
        <div className="tab-headers">
          <span
            className={activeTab === 'description' ? 'active' : ''}
            onClick={() => setActiveTab('description')}
          >
            Description
          </span>
          <span
            className={activeTab === 'additional' ? 'active' : ''}
            onClick={() => setActiveTab('additional')}
          >
            Additional information
          </span>
          <span
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </span>
        </div>

        <div className="tab-content">
          {activeTab === 'description' && (
            <p>
              {product.fullDescription || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
          )}
          {activeTab === 'additional' && (
            <p>More technical specifications and shipping information will be listed here.</p>
          )}
          {activeTab === 'reviews' && (
            <p>Customer reviews and ratings for {product.name} are not yet available.</p>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products">
        <h3>You may also like</h3>
        <div className="related-grid">
          {relatedProducts.map((rp, i) => (
            <div className="related-card" key={rp.id}>
              <div className="related-image-wrapper" style={{ backgroundColor: ["#c3c3fc", "#fadadd", "#fbeea1", "#c3c3fc"][i] }}>
                <Link to={`/product/${rp.id}`}>
                  <img src={rp.img} alt={rp.name} />
                </Link>
                <div className="sale-badge">
                  50%off<br />Festive<br />Sale
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetail;
