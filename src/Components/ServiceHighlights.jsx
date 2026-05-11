import React from 'react';
import truck from "../assets/truck.svg"
import whatsappicon from "../assets/whatsapp.svg";
import locationicon from "../assets/location.svg"
import './ServiceHighlights.css'
function ServiceHighlights() {
  return (
          <div className="services-container">
      <div className="service-item">
        <img src={truck} alt="delivery" className="icon-img" />
        <h4>Fast & Safe delivery</h4>
      </div>
      <div className="service-item">
        <img src={locationicon} alt="pickup" className="icon-img" />
        <h4>Free Store Pickup</h4>
      </div>
      <div className="service-item">
        <a  href="https://wa.me/8129509282" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
        <img src={whatsappicon} alt="whatsapp" className="icon-img" />
        <h4>Order Via Whatsapp</h4>
        </a>
      </div>
    </div>
   
  );
}

export default ServiceHighlights;
