import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import colordropLogo from '../assets/Colordroplogoblack.svg';


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand-section">
          <div className="footer-logo">
            <img src={colordropLogo} alt="colordrop logo" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            We have both premium and free<br />
            website templates. Build your<br />
            professional website with us.
          </p>
        </div>

        <div className="footer-links-container">
          <div className="footer-column">
            <h3>Service</h3>
            <ul>
              <li><Link to="#">How it works</Link></li>
              <li><Link to="#">Customer stories</Link></li>
              <li><Link to="#">Reviews</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="#">Privacy</Link></li>
              <li><Link to="#">Our Blog</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="#">FAQ</Link></li>
              <li><Link to="#">Sitemap</Link></li>
              <li><Link to="#">Careers</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          ©2021 Colordrop Terms of Service Privacy
        </div>
        <div className="footer-socials">
          <a href="#" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"/>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.014 2.286 18.647 2.474 19.07 2.639C19.63 2.857 20.03 3.12 20.45 3.54C20.87 3.96 21.133 4.36 21.351 4.92C21.516 5.343 21.704 5.976 21.757 7.14C21.815 8.406 21.827 8.786 21.827 12C21.827 15.214 21.815 15.594 21.757 16.86C21.704 18.024 21.516 18.657 21.351 19.08C21.133 19.64 20.87 20.04 20.45 20.46C20.03 20.88 19.63 21.143 19.07 21.361C18.647 21.526 18.014 21.714 16.85 21.767C15.584 21.825 15.204 21.837 12 21.837C8.796 21.837 8.416 21.825 7.15 21.767C5.986 21.714 5.353 21.526 4.93 21.361C4.37 21.143 3.97 20.88 3.55 20.46C3.13 20.04 2.867 19.64 2.649 19.08C2.484 18.657 2.296 18.024 2.243 16.86C2.185 15.594 2.173 15.214 2.173 12C2.173 8.786 2.185 8.406 2.243 7.14C2.296 5.976 2.484 5.343 2.649 4.92C2.867 4.36 3.13 3.96 3.55 3.54C3.97 3.12 4.37 2.857 4.93 2.639C5.353 2.474 5.986 2.286 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C5.775 0.13 4.902 0.334 4.14 0.63C3.354 0.935 2.686 1.334 2.02 2.02C1.334 2.686 0.935 3.354 0.63 4.14C0.334 4.902 0.13 5.775 0.072 7.053C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.667 0.072 16.947C0.13 18.225 0.334 19.098 0.63 19.86C0.935 20.646 1.334 21.314 2.02 21.98C2.686 22.666 3.354 23.065 4.14 23.37C4.902 23.666 5.775 23.87 7.053 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.667 23.986 16.947 23.928C18.225 23.87 19.098 23.666 19.86 23.37C20.646 23.065 21.314 22.666 21.98 21.98C22.666 21.314 23.065 20.646 23.37 19.86C23.666 19.098 23.87 18.225 23.928 16.947C23.986 15.667 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.87 5.775 23.666 4.902 23.37 4.14C23.065 3.354 22.666 2.686 21.98 2.02C21.314 1.334 20.646 0.935 19.86 0.63C19.098 0.334 18.225 0.13 16.947 0.072C15.667 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 15.998C9.792 15.998 8.002 14.208 8.002 12C8.002 9.792 9.792 8.002 12 8.002C14.208 8.002 15.998 9.792 15.998 12C15.998 14.208 14.208 15.998 12 15.998ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.596C16.965 6.392 17.61 7.037 18.406 7.037C19.202 7.037 19.847 6.392 19.847 5.596C19.847 4.8 19.202 4.155 18.406 4.155Z"/>
            </svg>
          </a>
          <a href="#" className="social-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452H16.891V14.881C16.891 13.55 16.866 11.839 15.039 11.839C13.186 11.839 12.902 13.284 12.902 14.783V20.452H9.346V9H12.763V10.565H12.812C13.289 9.663 14.453 8.716 16.182 8.716C19.787 8.716 20.447 11.087 20.447 14.167V20.452ZM5.337 7.433C4.195 7.433 3.273 6.505 3.273 5.362C3.273 4.218 4.196 3.295 5.337 3.295C6.476 3.295 7.404 4.218 7.404 5.362C7.404 6.505 6.476 7.433 5.337 7.433ZM7.119 20.452H3.553V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.226 0.792 24 1.771 24H22.222C23.2 24 24 23.226 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
