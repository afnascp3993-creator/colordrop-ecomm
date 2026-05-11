import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { brochures } from '../data/BrochureData';
import { useCart } from '../../Context/CartContext';
import './BusinessCardDetail.css';

const BrochureDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = brochures.find((p) => p.id === parseInt(id));

  const [hasUploadedDesign, setHasUploadedDesign] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const [selections, setSelections] = useState({});

  useEffect(() => {
    if (product && product.options) {
      const initialSelections = {};
      Object.keys(product.options).forEach(key => {
        const optionList = product.options[key];
        initialSelections[key] = typeof optionList[0] === 'string' ? optionList[0] : optionList[0].label;
      });
      setSelections(initialSelections);
    }
  }, [product]);

  const [designData, setDesignData] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && (event.data.type === 'DESIGN_EXPORTED' || event.data.type === 'DESIGN_COMPLETED')) {
        setHasUploadedDesign(true);
        if (event.data.dataUrl) {
          setDesignData({
            url: event.data.dataUrl,
            projectName: event.data.projectName || 'My Design'
          });
        }
        setIsEditorOpen(false);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  if (!product) {
    return <div className="product-not-found">Brochure not found. <Link to="/brochures">Return to Brochures</Link></div>;
  }

  const getOptionPrice = (key, selectedLabel) => {
    if (!product.options[key]) return 0;
    if (typeof product.options[key][0] === 'string') return 0;
    const opt = product.options[key].find(o => o.label === selectedLabel);
    return opt ? opt.price : 0;
  };

  const calculateTotal = () => {
    if (!selections.quantity) return product.basePrice || 0;
    const baseQuantityPrice = getOptionPrice('quantity', selections.quantity);
    let total = baseQuantityPrice;
    
    Object.keys(selections).forEach(key => {
      if (key !== 'quantity' && key !== 'size') {
        total += getOptionPrice(key, selections[key]);
      }
    });
    return total;
  };

  const handleSelect = (key, value) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = () => {
    addToCart({ ...product, price: calculateTotal(), selectedOptions: selections });
  };

  return (
    <>
      {hasUploadedDesign && designData ? (
        <div className="pd-new-layout" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            {/* LEFT: PREVIEW */}
            <div style={{ flex: '1 1 600px' }}>
              <div style={{ border: '1px solid #e0e0e0', padding: 40, background: '#fcfcfc', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
                <img src={designData.url} alt="Design Proof" style={{ maxWidth: '100%', maxHeight: 400, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }} />
              </div>
              <div style={{ display: 'flex', gap: 30, marginTop: 20, justifyContent: 'center', fontSize: 14, fontWeight: '600' }}>
                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => setIsEditorOpen(true)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Change Design
                </span>
                <span style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }} onClick={() => {
                  const a = document.createElement('a');
                  a.href = designData.url;
                  a.download = 'proof.png';
                  a.click();
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg> Download Proof
                </span>
              </div>
            </div>

            {/* RIGHT: SUMMARY & CART */}
            <div style={{ flex: '1 1 350px' }}>
              <h2 style={{ margin: '0 0 15px', fontSize: 22, fontWeight: 700 }}>
                Product Options <span style={{fontSize: 16, fontWeight: 400, color: 'var(--text3)'}}>({product.name})</span>
              </h2>
              
              <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 14, lineHeight: '28px', color: '#444' }}>
                  {Object.keys(selections).map(key => {
                    if (key === 'quantity') return null;
                    return (
                      <li key={key}>
                        <span style={{ display: 'inline-block', width: 100, color: '#777', textTransform: 'capitalize' }}>{key}:</span> 
                        <span style={{ fontWeight: 500 }}>{selections[key]}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{selections.quantity} | ₹ {calculateTotal()}.00</span>
                <span style={{ fontSize: 13, fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline', color: 'var(--accent)' }} onClick={() => setHasUploadedDesign(false)}>
                  Edit Order
                </span>
              </div>

              <div style={{ marginTop: 25 }}>
                <div style={{ fontSize: 14, color: '#333', fontWeight: 600 }}>Total Price</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>Including shipping and taxes</div>
                <div style={{ fontSize: 32, fontWeight: '800', margin: '15px 0 25px' }}>₹ {calculateTotal()}.00</div>
                
                <button onClick={handleAddToCart} style={{ width: '100%', padding: '18px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', fontSize: 16, fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, transition: 'background 0.2s' }} onMouseOver={e => e.target.style.background = '#333'} onMouseOut={e => e.target.style.background = '#111'}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pd-new-layout">
        {/* HERO SECTION */}
        <div className="pd-hero">
          <div className="pd-hero-images">
            <div className="pd-thumbnails">
              <div className="pd-thumb-active"><img src={product.image} alt="Thumb" /></div>
              <div className="pd-thumb"><img src={product.image} alt="Thumb" /></div>
              <div className="pd-thumb"><img src={product.image} alt="Thumb" /></div>
            </div>
            <div className="pd-main-img">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="pd-hero-info">
            <div className="pd-brand">Brand: ColorDrop</div>
            <h1 className="pd-h1-title">{product.name}</h1>
            <div className="pd-rating">
              <span className="stars">⭐ 4.2</span> <span className="reviews-link">(95 Reviews)</span>
            </div>
            
            <ul className="pd-features-list">
              <li>Premium quality {product.type.toLowerCase()} printing.</li>
              <li>Multiple standard and custom sizes available.</li>
              <li>Choose from a wide variety of premium paper options.</li>
              <li>Select from Matte, Gloss, or Velvet lamination options.</li>
              <li>Professional finishing and precise folding.</li>
              <li>Preview your designs before placing your order.</li>
            </ul>
            
            <div className="pd-price-shipping">
              <div className="price-block">
                <span className="label">Starts at</span>
                <span className="price">₹ {product.basePrice}.00</span>
                <span className="unit">per 100 pieces</span>
              </div>
              <div className="shipping-block">
                <span className="label">Ships out in</span>
                <span className="days">3 Days</span>
                <span className="unit">(Mon to Sat)</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONFIGURATION & SUMMARY SECTION */}
        <div className="pd-config-wrapper">
          <div className="pd-options-area">
            <h2 className="pd-section-title">Customise this product</h2>
            <p className="pd-section-sub">Select from a range of options to personalise your product</p>

            {product.options && Object.keys(product.options).map(key => {
              const optionsArray = product.options[key];
              const isStringArray = typeof optionsArray[0] === 'string';

              return (
                <div className="pd-option-group" key={key}>
                  <div className="pd-group-header">
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}:</h3>
                    {key === 'quantity' && <span className="pd-view-pricing">View Pricing Table</span>}
                  </div>
                  <div className="pd-option-grid">
                     {optionsArray.map((opt, i) => {
                        const label = isStringArray ? opt : opt.label;
                        const price = isStringArray ? 0 : opt.price;
                        const discount = !isStringArray && opt.discount ? opt.discount : null;
                        
                        let priceDisplay = '';
                        if (!isStringArray) {
                          if (key === 'quantity') {
                             priceDisplay = `₹ ${price}.00`;
                          } else {
                             priceDisplay = price === 0 ? '₹ 0.00' : `+ ₹ ${price}.00`;
                          }
                        }

                        return (
                          <div 
                            key={label}
                            className={`pd-opt-card ${selections[key] === label ? 'selected' : ''}`} 
                            onClick={() => handleSelect(key, label)}
                          >
                             <span className="opt-title">{label}</span>
                             {!isStringArray && (
                               <span className="opt-price">
                                 {priceDisplay}
                                 {discount && <span style={{background:'#e8f5e9', color:'#2e7d32', padding:'2px 4px', borderRadius:'4px', fontSize:'9px', marginLeft:'6px', fontWeight:'bold'}}>{discount}</span>}
                               </span>
                             )}
                             {selections[key] === label && <span className="check-icon">✔</span>}
                          </div>
                        )
                     })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pd-summary-sidebar">
            <div className="summary-inner">
              <div className="summary-header">
                <h3>Order Summary</h3>
                <span className="email-quote">Email Quote</span>
              </div>
              
              <div className="summary-items">
                {Object.keys(selections).map(key => {
                   let priceDisplay = '₹ 0.00';
                   if (key === 'quantity') {
                     priceDisplay = `₹ ${getOptionPrice(key, selections[key])}.00`;
                   } else {
                     const price = getOptionPrice(key, selections[key]);
                     if (price > 0) priceDisplay = `₹ ${price}.00`;
                   }

                   return (
                     <div className="sum-item" key={key}>
                       <div className="sum-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                       <div className="sum-val-row">
                         <span className="sum-val">{selections[key]}</span>
                         <span className="sum-val-price">{priceDisplay}</span>
                       </div>
                     </div>
                   )
                })}
              </div>

              <div className="summary-total">
                <div className="tot-left">
                  <span className="tot-label">Total Price</span>
                  <span className="tot-tax">Including shipping and taxes</span>
                </div>
                <div className="tot-price">₹ {calculateTotal()}.00</div>
              </div>

              <div className="summary-actions">
                 <button className="action-btn btn-black" onClick={() => setIsEditorOpen(true)}>
                    <span className="icon">🎨</span> Personalise this product
                 </button>
                 <button className="action-btn btn-outline" onClick={() => document.getElementById('file-upload-2').click()}>
                    <span className="icon">↑</span> upload your own design
                 </button>
                 <button className="action-btn btn-text" onClick={() => setIsEditorOpen(true)}>
                    <span className="icon">✎</span> make your own design
                 </button>
                 <input 
                   type="file" 
                   id="file-upload-2" 
                   style={{display: 'none'}} 
                   onChange={(e) => {
                     if(e.target.files && e.target.files.length > 0) setHasUploadedDesign(true)
                   }} 
                 />
                 
                 {hasUploadedDesign && (
                   <button className="pd-add-to-cart-btn" onClick={handleAddToCart} style={{width:'100%', marginTop: '15px'}}>
                      ADD TO CART
                   </button>
                 )}
              </div>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Editor Modal */}
      {isEditorOpen && (() => {
        let editorW = 890;
        let editorH = 510;
        if (selections.size === 'Square') {
          editorW = 600;
          editorH = 600;
        }
        
        return (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
            backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', 
            flexDirection: 'column'
          }}>
            <div style={{ padding: '10px', backgroundColor: '#1c1c1e', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <span style={{ color: '#fff', flex: 1, marginLeft: '10px', fontWeight: 'bold', fontFamily: 'sans-serif' }}>Design Your Brochure</span>
              <button 
                onClick={() => setIsEditorOpen(false)}
                style={{ background: '#FF2D55', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Close Editor
              </button>
            </div>
            <iframe 
              src={`/editor.html?w=${editorW}&h=${editorH}`} 
              style={{ flex: 1, width: '100%', border: 'none' }}
              title="Design Editor"
            />
          </div>
        );
      })()}
    </>
  );
};

export default BrochureDetail;
