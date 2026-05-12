import React from 'react';
import './About.css'; // Reusing the same CSS to maintain exact UI
import { Link } from 'react-router-dom';
import machineBanner from '../assets/machine-banner.png';
import vistingCardMockup from '../assets/vistingcardd-mockup.png';
import mugMockup from '../assets/mug-mockup.png';

function About() {
  return (
    <div className="landing-page">
      {/* HERO SECTION */}
      <section className="landing-hero">
        <div className="landing-hero-content">
          <h1>
            Explore the<br />
            5th color experience<br />
            with our printing<br />
            service
          </h1>
          <Link to="/products" className="btn-black">START PRINTING</Link>
        </div>
        <div className="landing-hero-image">
          <div className="illustration-placeholder" style={{ maxWidth: '650px', width: '100%', display: 'flex', justifyContent: 'flex-end', marginRight: '-5%' }}>
            <img src={machineBanner} alt="Printing Service" style={{ width: '120%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

     

      {/* SPLIT SECTION 1 */}
      <section className="landing-split">
        <div className="split-text">
          <h2>we offer<br />amazing<br />quality print<br />at unbeatable<br />low prices</h2>
          <p>From business cards, letterheads and compliment<br />slips to flyers, posters and roller banners.</p>
        </div>
        <div className="split-image">
          <div className="color-box blue-box"></div>
          <img src={vistingCardMockup} alt="Business Cards" className="floating-img" />
        </div>
      </section>

      {/* SPLIT SECTION 2 */}
      <section className="landing-split reverse">
        <div className="split-text">
          <h2>we offer<br />amazing<br />quality print<br />at unbeatable<br />low prices</h2>
          <p>From business cards, letterheads and compliment<br />slips to flyers, posters and roller banners.</p>
        </div>
                <div className="split-image">
          <div className="color-box yellow-box"></div>
          <img src={mugMockup} alt="Mug Printing" className="floating-img mug-img" />
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="landing-products">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">

          <div className="prod-col">
            <div className="prod-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18" /></svg>
            </div>
            <h3>Most Effective<br />Marketing Tools</h3>
            <ul>
              <li>Printing</li>
              <li>Business cards</li>
              <li>Compliment slips</li>
              <li>Flyers</li>
              <li>Folded flyers</li>
              <li>Greeting cards</li>
              <li>Letterheads</li>
              <li>Postcards</li>
              <li>Posters</li>
              <li>Roller banners</li>
              <li>Stickers</li>
            </ul>
          </div>

          <div className="prod-col">
            <div className="prod-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
            </div>
            <h3>Office & Business<br />Essentials</h3>
            <ul>
              <li>Printing</li>
              <li>Business cards</li>
              <li>Compliment slips</li>
              <li>Flyers</li>
              <li>Folded flyers</li>
              <li>Greeting cards</li>
              <li>Letterheads</li>
              <li>Postcards</li>
              <li>Posters</li>
              <li>Roller banners</li>
              <li>Stickers</li>
            </ul>
          </div>

          <div className="prod-col">
            <div className="prod-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" /></svg>
            </div>
            <h3>Promotional<br />Printing</h3>
            <ul>
              <li>Printing</li>
              <li>Business cards</li>
              <li>Compliment slips</li>
              <li>Flyers</li>
              <li>Folded flyers</li>
              <li>Greeting cards</li>
              <li>Letterheads</li>
              <li>Postcards</li>
              <li>Posters</li>
              <li>Roller banners</li>
              <li>Stickers</li>
            </ul>
          </div>

        </div>
        <div className="prod-action">
          <Link to="/products" className="btn-black">START PRINTING</Link>
        </div>
      </section>



    </div>
  );
}

export default About;