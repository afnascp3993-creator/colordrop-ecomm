import React from 'react';
import './Home.css'
import stationery4xImg from "../assets/Free_Stationery_Mockup_DD@2x.jpg";
import stationeryImg from "../assets/Free_Stationery_Mockup_4x@2x.jpg";
import lanyardImg from "../assets/Lanyard_ID_badge_mockup_1@2x.jpg";
import MarketingTools from './MarketingTools';
import ServiceHighlights from './ServiceHighlights';
import BusinessCard from './BusinessCard';
import Brochures from './Brochures';
import GiftSection from './GiftSection';


function Home() {
  return (
  <div>
 <div className="page">
 
      {/* ── HERO SECTION ──────────────────────────────────────── */}
      <section className="hero">
        <img
          src={stationery4xImg}
          alt=""
          className="hero__bg"
          aria-hidden="true"
        />
        <div className="hero__content">
          <h1 className="hero__title">
            Most Effective
            <br />
            Marketing Tools
          </h1>
          <br />
          <button className="btn">View Product</button>
        </div>
      </section>
 
      {/*
        ── GREY SPACER ───────────────────────────────────────────
        Same colour as the hero background (#e8e8e8).
        The cards below overlap UP into this div via margin-top: -80px
        on .grid-wrapper, creating the "lifted card" effect.
      */}
      <div className="spacer" />
 
      {/*
        ── GRID WRAPPER ──────────────────────────────────────────
        margin-top: -80px  → cards rise up into the grey spacer
        padding: 0 80px    → white space on left & right sides
      */}
      <div className="grid-wrapper">
        <section className="grid">
 
          {/* Left card — Business Essentials */}
          <div className="card card--blue">
            <img
              src={stationeryImg}
              alt="Business essentials mockup"
              className="card__bg"
            />
            <div className="card__content">
              <h2 className="card__title">
                Best Business
                <br />
                Essentials
              </h2>
              <p className="card__subtitle">Best Business Essentials</p>
              <button className="btn">View Product</button>
            </div>
          </div>
 
          {/* Right card — Business Cards */}
          <div className="card card--yellow">
            <img
              src={lanyardImg}
              alt="Lanyard ID badge mockup"
              className="card__bg"
            />
            <div className="card__content">
              <h2 className="card__title">
                Quality
                <br />
                Business Cards
              </h2>
              <p className="card__subtitle">Best Business Essentials</p>
              <button className="btn">View Product</button>
            </div>
          </div>

        </section>
      </div>
    </div>
         <ServiceHighlights/>
          <div
  style={{
    textAlign: "center",
    padding: "55px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "'Montserrat', sans-serif",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      marginBottom: "18px",
    }}
  >
    <svg
      width="58"
      height="58"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5B61F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4v16l5-2 6 2 5-2V4l-5 2-6-2-5 2z"></path>
      <path d="M9 4v16"></path>
      <path d="M15 4v16"></path>
      <rect x="5.5" y="8" width="2" height="3"></rect>
      <path d="M6.5 13h0"></path>
      <path d="M6.5 15h0"></path>
      <path
        d="M12 9l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z"
        transform="scale(0.5) translate(12, 10)"
      ></path>
      <path d="M17 12l2 1"></path>
      <path d="M17 15l2 1"></path>
    </svg>

    <h2
      style={{
        fontSize: "36px",
        fontWeight: "500",
        color: "#0F0F14",
        margin: 0,
        lineHeight: "1",
        letterSpacing: "2px",
      }}
    >
      Most Effective Marketing Tools
    </h2>
  </div>

  <p
    style={{
      fontSize: "16px",
      fontWeight: "400",
      color: "#666",
      lineHeight: "1.45",
      margin: 0,
      maxWidth: "1250px",
      marginInline: "auto",
      letterSpacing: "-0.2px",
    }}
  >
    Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book
  </p>
</div>
      <BusinessCard/>
        <div
  style={{
    textAlign: "center",
    padding: "55px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "'Montserrat', sans-serif",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      marginBottom: "18px",
    }}
  >
    <svg
      width="58"
      height="58"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5B61F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4v16l5-2 6 2 5-2V4l-5 2-6-2-5 2z"></path>
      <path d="M9 4v16"></path>
      <path d="M15 4v16"></path>
      <rect x="5.5" y="8" width="2" height="3"></rect>
      <path d="M6.5 13h0"></path>
      <path d="M6.5 15h0"></path>
      <path
        d="M12 9l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z"
        transform="scale(0.5) translate(12, 10)"
      ></path>
      <path d="M17 12l2 1"></path>
      <path d="M17 15l2 1"></path>
    </svg>

    <h2
      style={{
        fontSize: "36px",
        fontWeight: "500",
        color: "#0F0F14",
        margin: 0,
        lineHeight: "1",
        letterSpacing: "2px",
      }}
    >
      Most Effective Marketing Tools
    </h2>
  </div>

  <p
    style={{
      fontSize: "16px",
      fontWeight: "400",
      color: "#666",
      lineHeight: "1.45",
      margin: 0,
      maxWidth: "1250px",
      marginInline: "auto",
      letterSpacing: "-0.2px",
    }}
  >
    Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book
  </p>
</div>
<Brochures/>
  <div
  style={{
    textAlign: "center",
    padding: "55px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "'Montserrat', sans-serif",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      marginBottom: "18px",
    }}
  >
    <svg
      width="58"
      height="58"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5B61F6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4v16l5-2 6 2 5-2V4l-5 2-6-2-5 2z"></path>
      <path d="M9 4v16"></path>
      <path d="M15 4v16"></path>
      <rect x="5.5" y="8" width="2" height="3"></rect>
      <path d="M6.5 13h0"></path>
      <path d="M6.5 15h0"></path>
      <path
        d="M12 9l1 3h3l-2.5 2 1 3-2.5-2-2.5 2 1-3-2.5-2h3z"
        transform="scale(0.5) translate(12, 10)"
      ></path>
      <path d="M17 12l2 1"></path>
      <path d="M17 15l2 1"></path>
    </svg>

    <h2
      style={{
        fontSize: "36px",
        fontWeight: "500",
        color: "#0F0F14",
        margin: 0,
        lineHeight: "1",
        letterSpacing: "2px",
      }}
    >
      Most Effective Marketing Tools
    </h2>
  </div>

  <p
    style={{
      fontSize: "16px",
      fontWeight: "400",
      color: "#666",
      lineHeight: "1.45",
      margin: 0,
      maxWidth: "1250px",
      marginInline: "auto",
      letterSpacing: "-0.2px",
    }}
  >
    Lorem Ipsum has been the industry's standard dummy text ever since
    the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book
  </p>
</div>
<GiftSection/>  
</div>  

  );
}

export default Home;
