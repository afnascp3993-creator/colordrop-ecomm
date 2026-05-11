import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-section-title" style={{ justifyContent: 'center' }}>Hero Section</div>
        <h1>We Are More Than Printers. We Are Your Brand’s Growth Partner.</h1>
        <p>
          At <strong>Colordrop</strong>, we don’t just print designs — we bring ideas to life, elevate brands, and create experiences that leave a lasting impression.
        </p>
        <p>
          From startups to established businesses, we help you stand out in a crowded world with powerful visuals and precision printing.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div>
          <div className="about-section-title">Our Story</div>
        </div>
        <div className="story-text">
          <p>
            Every brand has a beginning. Ours started in <strong>2016</strong>, in Kannur, with a simple vision — <strong>to deliver print quality that people had never experienced before.</strong>
          </p>
          <p>
            What began with one advanced digital printing machine soon turned into something bigger.
          </p>
          <p>
            As businesses evolved, so did their needs. And we realized one thing: printing alone is not enough — brands need identity, strategy, and consistency.
          </p>
          <div className="highlight-quote">
            So we expanded.
          </div>
          <p>
            From a <strong>printing company</strong>, Colordrop grew into a <strong>complete creative and branding partner</strong> — offering design, brand identity, web solutions, and marketing support.
          </p>
          <p>
            Today, we stand as a trusted name for businesses that want to look better, communicate better, and grow faster.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="about-services">
        <div className="services-wrapper">
          <div className="about-section-title">What We Do</div>
          <p style={{ fontSize: '18px', color: '#555' }}>We bring everything your brand needs under one roof:</p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Printing</h3>
              <p>High-quality digital printing powered by advanced technology — delivering sharp, vibrant, and premium results up to 470 GSM and beyond.</p>
            </div>
            <div className="service-card">
              <h3>Design</h3>
              <p>Creative designs that don’t just look good — they communicate, connect, and convert.</p>
            </div>
            <div className="service-card">
              <h3>Branding</h3>
              <p>We build identities that make your business memorable, consistent, and professional.</p>
            </div>
            <div className="service-card">
              <h3>Digital</h3>
              <p>From websites to marketing creatives, we help your brand thrive in the digital space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="about-philosophy">
        <div className="philosophy-wrapper">
          <div className="about-section-title">Our Philosophy</div>
          <p style={{ fontSize: '18px', color: '#bbb' }}>At Colordrop, everything we do is guided by a few core beliefs:</p>
          
          <div className="philosophy-list">
            <div className="philosophy-item">
              <h3>Quality is not an option — it’s our standard.</h3>
              <p>Every print, every design, every detail matters.</p>
            </div>
            <div className="philosophy-item">
              <h3>Innovation keeps us ahead.</h3>
              <p>We constantly upgrade our technology and ideas to deliver better results.</p>
            </div>
            <div className="philosophy-item">
              <h3>Your growth is our success.</h3>
              <p>We don’t see clients as transactions — we build long-term partnerships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE & IMPACT */}
      <section className="about-split-section">
        <div className="why-choose">
          <div className="about-section-title">Why Choose Colordrop</div>
          <ul className="choose-list">
            <li>Advanced printing technology with unmatched quality</li>
            <li>A complete solution — from concept to final output</li>
            <li>Fast, reliable, and consistent delivery</li>
            <li>Creative thinking backed by real-world experience</li>
            <li>Trusted by businesses, designers, and institutions</li>
          </ul>
        </div>
        
        <div className="impact-content">
          <div className="about-section-title">Our Impact</div>
          <p>
            Over the years, we’ve worked with <strong>business owners, agencies, designers, schools, and retail brands</strong> — helping them transform their ideas into reality.
          </p>
          <p>
            From small projects to large-scale production, our focus has always remained the same: <br />
            <strong>deliver excellence, build trust, and grow together.</strong>
          </p>
        </div>
      </section>

      {/* VISION & CLOSING */}
      <section className="about-vision-closing">
        <div className="about-section-title" style={{ justifyContent: 'center', color: '#fff' }}>Our Vision</div>
        <p>
          We aim to become a <strong>leading creative and printing partner across India and beyond</strong> — helping brands not just exist, but truly stand out.
        </p>
        
        <div className="closing-statement">
          <h3>Colordrop is where ideas take shape, brands find their voice, and quality meets creativity.</h3>
        </div>
      </section>

    </div>
  );
}

export default About;
