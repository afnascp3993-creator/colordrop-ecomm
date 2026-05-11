import React from 'react';
import { useState } from 'react';
import './Navbar.css'
import logo from "../assets/logo .svg"
import { NavLink } from "react-router-dom";
import { useCart } from '../../Context/CartContext';
import BusinessCard from './BusinessCard';

function Navbar() {
const [showDropdown, setShowDropdown] = useState(false);
  const { cartItemCount } = useCart();

  return (
    <nav className="navbar">
        <div className="top-bar">
        <div></div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="icons">
           <span>♡</span>
          <NavLink to="/cart" className="cart-icon-wrapper">
             <span>🛒</span>
             {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
           </NavLink>
        </div>
        </div>

      {/* MENU */}


     <ul className="nav-links">
        <li><NavLink to="/">HOME</NavLink></li>
        <li 
          className="has-mega-menu"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <NavLink to="/Products">PRODUCTS</NavLink>
          
          {/* MEGA MENU DROPDOWN */}
          {showDropdown && (
            <div className="mega-menu">
              <div className="mega-menu-content">
                
                {/* Column 1: Business Cards */}
                <div className="menu-column">
                  <h3>
                    <NavLink to="/businesscard" style={{ color: 'inherit', textDecoration: 'none' }}>
                      Business Cards ↗
                    </NavLink>
                  </h3>
                  <ul>
                    <li><NavLink to="/Products?category=single-sided">Visiting Cards (Single Sided)</NavLink></li>
                    <li><NavLink to="/Products?category=front-back">Visiting Cards (Front and Back)</NavLink></li>
                    <li><NavLink to="/Products?category=trifecta">Sandwich/Trifecta Business Cards</NavLink></li>
                    <li><NavLink to="/Products?category=slim">Slim Visiting Cards</NavLink></li>
                    <li><NavLink to="/Products?category=folded">Folded Visiting Cards</NavLink></li>
                    <li><NavLink to="/Products?category=spot-lamination">Spot Laminated Business Card</NavLink></li>
                    <li><NavLink to="/Products?category=pvc">PVC Plastic Business Cards</NavLink></li>
                    <li><NavLink to="/Products?category=non-tearable">Non-Tearable Business Cards</NavLink></li>
                    <li><NavLink to="/Products?category=eco-friendly">Recycled/Eco-Friendly Cards</NavLink></li>
                  </ul>
                </div>

                {/* Column 2: Brochures */}
               <div className="menu-column">
                  <h3>
                    <NavLink to="/brochures" style={{ color: 'inherit', textDecoration: 'none' }}>
                      Brochures ↗
                    </NavLink>
                  </h3>
                  <ul>
                    <li><NavLink to="/Products?category=tri-fold">Tri-Fold Brochures</NavLink></li>
                    <li><NavLink to="/Products?category=bi-fold">Bi-Fold Brochures</NavLink></li>
                    <li><NavLink to="/Products?category=z-fold">Z-Fold Brochures</NavLink></li>
                    <li><NavLink to="/Products?category=gate-fold">Gate-Fold Brochures</NavLink></li>
                    <li><NavLink to="/Products?category=flyers">Flyers & Leaflets</NavLink></li>
                    <li><NavLink to="/Products?category=booklets">Corporate Booklets</NavLink></li>
                  </ul>
                </div>  

                {/* Column 3: Gift Printing */}
                               <div className="menu-column">
                  <h3>
                    <NavLink to="/gifts" style={{ color: 'inherit', textDecoration: 'none' }}>
                      Gift Printing ↗
                    </NavLink>
                  </h3>
                  <ul>
                    <li><NavLink to="/Products?category=mugs">Custom Mugs</NavLink></li>
                    <li><NavLink to="/Products?category=tshirts">Personalized T-Shirts</NavLink></li>
                    <li><NavLink to="/Products?category=keychains">Engraved Keychains</NavLink></li>
                    <li><NavLink to="/Products?category=cushions">Photo Cushions</NavLink></li>
                    <li><NavLink to="/Products?category=calendars">Custom Calendars</NavLink></li>
                    <li><NavLink to="/Products?category=diaries">Personalized Diaries</NavLink></li>
                  </ul>
                </div>

              </div>
            </div>
          )}
        </li>
        <li><NavLink to="/About">ABOUT</NavLink></li>
        <li><NavLink to="/Contact">CONTACT</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
